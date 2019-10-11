import { Injectable } from '@angular/core';

import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          } 
        );
      }
    );
  }
  signInUser(email: string, password: string) {
    return new Promise<any>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          res => resolve(res),
          err => reject(err))
      }
    );
  }
  signOutUser() {
    firebase.auth().signOut();
  }
}