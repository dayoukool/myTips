import { Pipe, PipeTransform } from '@angular/core';
import { SessionsComponent } from 'src/app/sessions/sessions.component';
import { SessionService } from 'src/app/sessions/session.service';
import { Session } from '../core/models/session.model';

@Pipe({
  name: 'levelPipe'
})
export class LevelPipePipe implements PipeTransform {
  public session: Session[];
  public slides: any;



  constructor(private Sessions: SessionsComponent, private sessionService: SessionService) {

  }
  transform(Slides: Session[], levels: []): any {
    console.log('Slides :');
    console.log(Slides);
    console.log('level :');
    console.log(levels);
      if (!Slides || !levels || levels.length == 0  ){
        console.log('on filtre pas');
        return Slides;
      }
    console.log('on filtre');
    console.log(Slides.filter((el) => {
      return levels.find(top => top == el.level) !== undefined;
    }));
    Slides = Slides.filter((el) => {
      return levels.find(top => top == el.level) !== undefined;
    });
    console.log(Slides);
    return Slides;
  }

}
