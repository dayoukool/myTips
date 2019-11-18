import { Session } from './../core/models/session.model';
import { Injectable } from '@angular/core';
import { Module } from './../core/models/module.model';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Sujet } from '@core/models/sujet.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


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
    return this.db.collectionGroup('modules', ref => ref.orderBy('sujet').orderBy('level'))
      .snapshotChanges().pipe(map(modules => modules.map(m => {
        const data = m.payload.doc.data() as Session;
        const id = m.payload.doc.id;
        console.log('getmodules ce que l\'on obitent à la fin', id, data);
        return { id, ...data };
      })));
  }

}
