import { Injectable } from '@angular/core';
import { Session } from '../core/models/session.model'
import * as sessionData from './data/sessions.json';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public getSessions() : Session[]{
    let retSessions : Session[] = [];
    sessionData.sessions.forEach(sess => {
      retSessions.push(new Session().deserialize(sess));
    });
    return retSessions;
  }
}
