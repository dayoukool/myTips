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

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.sessions = this.sessionService.getSessions();
    console.log("erreur");
    console.log(this.sessions);
    this.slides = this.chunk(this.sessions, 3);
    console.log(this.slides);
  }

}
