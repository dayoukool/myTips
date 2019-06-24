import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { Session } from '../core/models/session.model';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.sass']
})
export class SessionsComponent implements OnInit {
  public sessions : Session[];

  constructor(public sessionService : SessionService) { }

  ngOnInit() {
    this.sessions = this.sessionService.getSessions();
  }

}
