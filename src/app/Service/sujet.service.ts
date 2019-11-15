import { Module } from './../core/models/module.model';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Sujet } from '@core/models/sujet.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class SujetService {

  sujetsRef: AngularFirestoreCollection<Sujet> = null;
  sujetRef: AngularFirestoreDocument<Sujet>;
  sujetTable: Observable<Sujet[]>;

  constructor(private db: AngularFirestore) {
    this.sujetsRef = db.collection('topics', ref=>ref.orderBy('name'));
  }

  createSujet(sujet: string, img: string, modules: Module[]) {
    this.sujetsRef.add({
      name: sujet,
      img: img,
      modules: modules,
    });
  }

  updateSujet(id: string, type: string, value: any): Promise<void> {
    if (type === 'name') {
      return this.sujetsRef.doc(id).update({ name: value });
    }
    if (type === 'img') {
      return this.sujetsRef.doc(id).update({ img: value });
    }
  }

  deleteSujet(id: string): Promise<void> {
    return this.sujetsRef.doc(id).delete();
  }

  getSingleSujet(id: string) {
    return this.sujetsRef.doc(id).snapshotChanges().pipe(map(c =>
      ({ id: c.payload.id, ...c.payload.data() }))
    );
  }

  getAllSujet(): AngularFirestoreCollection<Sujet> {
    return this.sujetsRef;
  }

  getSujets() {
    return this.sujetTable = this.getAllSujet().snapshotChanges().pipe(map(sujets => {
      return sujets.map(s => {
        const data = s.payload.doc.data() as Sujet;
        const id = s.payload.doc.id;
        console.log(data);
        return { id, ...data };
      });
    }));
  }
}
