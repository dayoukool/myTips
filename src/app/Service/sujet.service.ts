import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Sujet } from '@core/models/sujet.model';


@Injectable({
  providedIn: 'root'
})
export class SujetService {

  sujetsRef: AngularFirestoreCollection<Sujet> = null;
  sujetRef: AngularFirestoreDocument<Sujet>;

  constructor(private db: AngularFirestore) {
    this.sujetsRef = db.collection('topics');
  }

  createSujet(sujet: Sujet) {
    this.sujetsRef.add({ ...sujet });
  }

  updateSujet(id: string, value: any): Promise<void> {
    return this.sujetsRef.doc(id).update(value);
  }

  deleteSujet(id: string): Promise<void> {
    return this.sujetsRef.doc(id).delete();
  }

  getSingleSujet(id: string) {
    return this.sujetsRef.doc(id);
  }

  getAllSujet(): AngularFirestoreCollection<Sujet> {
    return this.sujetsRef;
  }

}
