import { Component, OnInit } from '@angular/core';
import { ProfilService } from './profil.service';
import { User } from '../core/models/user.model';
import { FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {

  public user: any;
  private email = new FormControl('', [Validators.required, Validators.email]);
  private name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'Champ vide' :
      this.email.hasError('required') ? 'Champ vide' :
        this.email.hasError('email') ? 'l\'addresse n\'est pas au bon format' :
          '';
  }


  constructor(public ProfilService: ProfilService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.user = this.ProfilService.getUser();
    console.log(this.user);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  updateProfile() {

    const email = this.email.value;
    const Name = this.name.value;
    const img = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png";
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: Name,
      photoURL: img
    }).then(() => {
      this.openSnackBar('Sauvegarde Réussie', 'Fermer');
    },
      (error) => {
        this.openSnackBar(' Erreur lors de la sauvegarde', 'Fermer');
      });
  }
}

