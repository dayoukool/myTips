import { Pipe, PipeTransform } from '@angular/core';
import { SessionsComponent } from 'src/app/sessions/sessions.component';
import { SessionService } from 'src/app/sessions/session.service';
import { Session } from '../core/models/session.model';

@Pipe({
  name: 'topicFilters'
})
export class TopicFiltersPipe implements PipeTransform {
  public session: Session[];
  public cards: Session[];
  

  constructor(private Sessions: SessionsComponent, private sessionService: SessionService) {

  }
  transform(Topics: []): any {
    this.cards = this.sessionService.getSessions();
    return this.cards.filter((el) => {
      return Topics.find(top => top == el.topic) !== undefined;
    });
  }

}
