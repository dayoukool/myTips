import { Pipe, PipeTransform } from '@angular/core';
import { SessionsComponent } from 'src/app/sessions/sessions.component';
import { SessionService } from 'src/app/sessions/session.service';
import { Session } from '../core/models/session.model';

@Pipe({
  name: 'filterDatePipe'
})
export class FilterDatePipePipe implements PipeTransform {
  public session: Session[];
  public slides: any;
  public minValue: Date;
  public maxValue: Date;

  constructor() {

  }
  transform(Slides: Session[], minValue: Date, maxValue: Date): any {
    console.log('Slides :');
    console.log(Slides);
    console.log('minValue :');
    console.log(minValue);
    console.log(maxValue);
    if (!Slides) {
      console.log('on filtre pas');
      return Slides;
    }
    console.log('on filtre');
    console.log('dates :');
    Slides = Slides.filter((el) => {
      console.log(new Date(el.date));
      console.log(new Date(el.date) <= this.maxValue && new Date(el.date) >= this.minValue);
      return new Date(el.date) <= this.maxValue && new Date(el.date) >= this.minValue
    }
    );
    console.log(Slides);
    return Slides;
  }

}
