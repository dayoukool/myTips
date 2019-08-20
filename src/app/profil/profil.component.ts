import { Component, OnInit } from '@angular/core';
import { ProfilService } from './profil.service';
import { User } from '../core/models/user.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {

  public user: User;
  private email = new FormControl('', [Validators.required, Validators.email]);
  private lastName = new FormControl('', [Validators.required]);
  private firstName = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Champ vide' :
      this.email.hasError('email') ? 'l\'addresse n\'est pas au bon format' :
        '';
  }


  constructor(public ProfilService: ProfilService) {

  }

  ngOnInit() {
    this.user = this.ProfilService.getUser();
    console.log(this.user);
  }

}
