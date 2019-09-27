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
  public minValueNumber: Number;
  public maxValueNumber: Number;
  

  constructor() {

  }
  transform(Slides: Session[], minValue: Date, maxValue: Date): any {
    console.log('Slides :');
    console.log(Slides);
    console.log('minValue :');
    console.log(minValue);
    console.log(maxValue);
    this.maxValueNumber = Date.parse(maxValue.toString());
    this.minValueNumber = Date.parse(minValue.toString());
    if (!Slides) {
      console.log('on filtre pas');
      return Slides;
    }
    console.log('on filtre');
    console.log('dates :');
    Slides = Slides.filter((el) => {
      console.log(el.date);
      console.log(new Date(el.date));
      el.date = new Date(el.date);
      console.log(Date.parse(el.date.toString()));
      console.log(Date.parse(el.date.toString()) <= this.maxValueNumber && Date.parse(el.date.toString()) >= this.minValueNumber);
      return Date.parse(el.date.toString()) <= this.maxValueNumber && Date.parse(el.date.toString()) >= this.minValueNumber;
    }
    );
    console.log(Slides);
    return Slides;
  }

}
