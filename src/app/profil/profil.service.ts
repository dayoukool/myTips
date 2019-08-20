import { Injectable } from '@angular/core';
import * as profilData from './data/profil.json';
import { User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor() { }

  public getUser() : User{
    let retUsers : User;
    retUsers = new User().deserialize(profilData);
    return retUsers;
  }
}
