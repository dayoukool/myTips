import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    return this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Bravo le compte a été créé, connectez-vous!', res);
        this.router.navigate(['auth/signin']);
      })
      .catch(error => {
        console.log('Erreur:', error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    return this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password);
      
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }
}