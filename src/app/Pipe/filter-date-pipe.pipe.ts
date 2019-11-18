import { Pipe, PipeTransform } from '@angular/core';
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
    
    this.maxValueNumber = Date.parse(maxValue.toString());
    this.minValueNumber = Date.parse(minValue.toString());
    if (!Slides) {
      return Slides;
    }
    Slides = Slides.filter((el) => {
      el.date = new Date(el.date);
      return Date.parse(el.date.toString()) <= this.maxValueNumber && Date.parse(el.date.toString()) >= this.minValueNumber;
    }
    );
    
    return Slides;
  }

}
