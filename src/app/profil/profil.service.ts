import { Injectable } from '@angular/core';
import * as profilData from './data/profil.json';
import { User } from '@core/models/user.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor() { }

  public getUser(): any {
    const user = firebase.auth().currentUser;
    return user;
  }

}
