import { Module } from './../core/models/module.model';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Sujet } from '@core/models/sujet.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  modulesRef: AngularFirestoreCollection<Module> = null;
  moduleRef: AngularFirestoreDocument<Module>;
  moduleTable: Observable<Module[]>;
  moduleAdmin: AngularFirestoreCollectionGroup<Module>;

  constructor(private db: AngularFirestore) {
    this.modulesRef = db.collection('topics');
  }

  createModule(titre: string, sujet: string, level: number, description: string, id: string) {
    this.db.collection('topics').doc(id).collection('/modules').add({
      titre: titre,
      level: level,
      sujet: sujet,
      description: description,
    });
  }

  updateModule(oldId: string, newId: string, idDoc: string, titre: string, description: string, level: number, sujet: string): Promise<void> {
    if (titre !== "") {
      return this.modulesRef.doc(oldId).collection('modules').doc(idDoc).update({ titre: titre });
    }
    if (description !== "") {
      return this.modulesRef.doc(oldId).collection('modules').doc(idDoc).update({ description: description });
    }
    if (level !== null) {
      return this.modulesRef.doc(oldId).collection('modules').doc(idDoc).update({ level: level });
    }
    if (sujet !== null) {
      this.createModule(titre, sujet, level, description, newId);
      return this.deleteModule(oldId, idDoc);
    }
    ;
  }

  deleteModule(id: string, idDoc: string): Promise<void> {
    return this.modulesRef.doc(id).collection('modules').doc(idDoc).delete();
  }

  getSingleModule(id: string, idDoc: string) {
    return this.modulesRef.doc(id).collection('modules').doc(idDoc).snapshotChanges().pipe(map(c =>
      ({ id: c.payload.id, ...c.payload.data() }))
    );
  }

  getAllModule(id: string): AngularFirestoreCollection<Module> {
    return this.modulesRef.doc(id).collection('modules', ref => ref.orderBy('level').orderBy('sujet'));
  }

  getID(name: string) {
    return this.db.collection('topics', ref => ref.where('name', '==', name)).snapshotChanges().pipe(map(sujets => {
      return sujets.map(s => {
        const data = s.payload.doc.data() as Sujet;
        const id = s.payload.doc.id;
        return { id, ...data };
      });
    }));
  }
  getModules(id: string) {
    return this.moduleTable = this.getAllModule(id).snapshotChanges().pipe(map(modules => modules.map(m => {
      const data = m.payload.doc.data() as Module;
      const id = m.payload.doc.id;
      console.log('getmodules ce que l\'on obitent à la fin', id, data);
      return { id, ...data };
    })));
  }
  getEveryModule() {
    return this.db.collectionGroup('modules', ref => ref.orderBy('sujet').orderBy('level')).snapshotChanges().pipe(map(modules => modules.map(m => {
      const data = m.payload.doc.data() as Module;
      const id = m.payload.doc.id;
      console.log('getmodules ce que l\'on obitent à la fin', id, data);
      return { id, ...data };
    })));
  }


}
