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
  public slides: any;



  constructor(private Sessions: SessionsComponent, private sessionService: SessionService) {

  }
  transform(Slides: Session[], Topics: []): any {
    console.log('Slides :');
    console.log(Slides);
    console.log('topics :');
    console.log(Topics);
      if (!Slides || !Topics || Topics.find(top=> top == 'All') || Topics.length == 0  ){
        console.log('on filtre pas');
        return Slides;
      }
    this.cards = this.sessionService.getSessions();
    console.log('on filtre');
    console.log(this.cards.filter((el) => {
      return Topics.find(top => top == el.topic) !== undefined;
    }));
    this.cards = this.cards.filter((el) => {
      return Topics.find(top => top == el.topic) !== undefined;
    });
    console.log(this.slides=this.cards);
    return this.slides=this.cards;
  }

}
