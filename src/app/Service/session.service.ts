import { Session } from './../core/models/session.model';
import { Injectable } from '@angular/core';
import { Module } from './../core/models/module.model';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Sujet } from '@core/models/sujet.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionsRef: AngularFirestoreCollection<Session> = null;
  sessionRef: AngularFirestoreDocument<Session>;
  sessionTable: Observable<Session[]>;
  sessionAdmin: AngularFirestoreCollectionGroup<Session>;
  constructor(private db: AngularFirestore) { }


  getAllSession(idSujet: string, idModule: string): AngularFirestoreCollection<Session> {
    return this.db.collection('topics').doc(idSujet)
      .collection('modules').doc(idModule).collection('sessions', ref => ref.orderBy('dateDeb'));
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
  getSessions(idSujet: string, idModule: string) {
    return this.sessionTable = this.getAllSession(idSujet, idModule).snapshotChanges().pipe(map(modules => modules.map(m => {
      const data = m.payload.doc.data() as Session;
      const id = m.payload.doc.id;
      console.log('getmodules ce que l\'on obitent à la fin', id, data);
      return { id, ...data };
    })));
  }
  getEverySession() {
    return this.db.collectionGroup('sessions', ref => ref.orderBy('dateDeb'))
      .snapshotChanges().pipe(map(modules => modules.map(m => {
        const data = m.payload.doc.data() as Session;
        const id = m.payload.doc.id;
        console.log('getmodules ce que l\'on obitent à la fin', id, data);
        return { id, ...data };
      })));
  }
  getSachant(idSachant: string) {
    console.log('sachant', idSachant);
    return this.db.collection('users').doc(idSachant).snapshotChanges().pipe(map(sachant => {
      const data = sachant.payload.data();
      return { data };
    }
    ));
  }

  getUsers(idArray: []) {

  }

  createSession(dateDeb: number, dateFin: number, sachant: [], followers: [], description: string, idSujet: string, idModule: string) {
    this.db.collection('topics').doc(idSujet).collection('modules').doc(idModule).collection('sessions').add({
      dateDeb: new firebase.firestore.Timestamp(dateDeb, 0),
      dateFin: new firebase.firestore.Timestamp(dateFin, 0),
      sachant: sachant,
      description: description,
      followers: followers,
      module: [idModule, ''],
      type: 'créée'
    });
  }
  deleteSession(idSujet: string, idModule: string, idDoc: string): Promise<void> {
    return this.db.collection('topics').doc(idSujet).collection('modules').doc(idModule).collection('modules').doc(idDoc).delete();
  }

  updateSession(idSujet: string, NewIdSujet: string, oldIdModule: string, newIdModule: string, idDoc: string, dateDeb: any, description: string, dateFin: any, sachant: [], followers: []): Promise<void> {
    if (dateDeb !== "") {
      return this.db.collection('topics').doc(idSujet).collection('modules').doc(oldIdModule).collection('modules').doc(idDoc).update({ dateDeb: dateDeb });
    }
    if (description !== "") {
      return this.db.collection('topics').doc(idSujet).collection('modules').doc(oldIdModule).collection('modules').doc(idDoc).update({ description: description });
    }
    if (sachant !== null) {
      return this.db.collection('topics').doc(idSujet).collection('modules').doc(oldIdModule).collection('modules').doc(idDoc).update({ sachant: sachant });
    }
    if (dateFin !== null) {
      return this.db.collection('topics').doc(idSujet).collection('modules').doc(oldIdModule).collection('modules').doc(idDoc).update({ dateFin: dateFin });
    }
    if (module !== null) {
      this.createSession(dateDeb, dateFin, sachant, followers, description, NewIdSujet, newIdModule);
      return this.deleteSession(idSujet, oldIdModule, idDoc);
    }
    ;
  }

}
