import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Sujet } from '@core/models/sujet.model';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor() { }

  public getSujet(idDoc: string): any {
    const sujet = firebase.firestore().collection('topics').doc(idDoc).get().then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    })
      .catch(err => {
        console.log('Error getting document', err);
      });
    return sujet;
  }

}
