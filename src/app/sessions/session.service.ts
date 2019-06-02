import { Injectable } from '@angular/core';
import { Session } from '../core/models/session.model'
import * as sessionData from './data/sessions.json';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public getSession() : Session{
    return new Session().deserialize(sessionData.session);
  }
}
