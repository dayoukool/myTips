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

  constructor() { }
}
