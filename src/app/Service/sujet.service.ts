import { Sujet } from '@core/models/sujet.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {DataSnapshot} from 'firebase/database/DataSnapshot';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class SujetService {

    sujets: Sujet[] =[];
    sujetsSubject = new Subject<Sujet[]>();

    emiSujets() {
      this.sujetsSubject.next(this.sujets);
    }

    saveSujets(){
      firebase.database().ref('/sujets').set(this.sujets);
    }
    getSujets(){
      firebase.database().ref('/sujets')
        .on('value', (data: DataSnapshot) => {
            this.sujets = data.val() ? data.val() : [];
            this.emiSujets();
        })
    }

    getSingleSujet(id: number) {
      return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/sujets/' + id).once('value').then(
            (data: DataSnapshot) => {
              resolve(data.val());
            }, (error) => {
              reject(error);
            }
          );
        }
      );
    }
  constructor() { this.getSujets(); }
}
