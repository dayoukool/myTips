import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../sessions/session.service';
import { Session } from 'src/app/core/models/session.model';

@Component({
  selector: 'app-card-sessions',
  templateUrl: './card-sessions.component.html',
  styleUrls: ['./card-sessions.component.sass']
})
export class CardSessionsComponent implements OnInit {
  @Input() session: Session;
  constructor(private sessionService: SessionService) {
  }


  ngOnInit() {
  }

}
