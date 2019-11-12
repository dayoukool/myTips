import { Module } from '@core/models/Module.model';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
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

  constructor(private db: AngularFirestore) {
    this.modulesRef = db.collection('topics');
  }

  createSujet(titre: string, level: number, description: string) {
    this.modulesRef.add({
      titre: titre,
      level: level,
      description: description,
    });
  }

  updatemModule(id: string, idDoc: string, type: string, value: any): Promise<void> {
    if (type === 'name') {
      return this.modulesRef.doc(id).collection('modules').doc(idDoc).update({ name: value });
    }
    if (type === 'img') {
      return this.modulesRef.doc(id).collection('modules').doc(idDoc).update({ img: value });
    }
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
    return this.modulesRef.doc(id).collection('modules');
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
}
