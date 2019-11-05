import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Sujet } from '@core/models/sujet.model';


@Injectable({
  providedIn: 'root'
})
export class SujetService {

  sujetRef: AngularFirestoreCollection<Sujet> = null;

  constructor(private db: AngularFirestore) {
    this.sujetRef = db.collection('topics');
  }

  createSujet(sujet: Sujet) {
    this.sujetRef.add({ ...sujet });
  }

  updateSujet(id: string, value: any): Promise<void> {
    return this.sujetRef.doc(id).update(value);
  }

  deleteSujet(id: string): Promise<void> {
    return this.sujetRef.doc(id).delete();
  }

  getSingleSujet(id: string) { }

  getAllSujet(): AngularFirestoreCollection<Sujet> {
    return this.sujetRef;
  }

}
