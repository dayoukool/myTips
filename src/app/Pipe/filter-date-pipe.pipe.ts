import { Pipe, PipeTransform } from '@angular/core';
import { Session } from '../core/models/session.model';

@Pipe({
  name: 'filterDatePipe'
})
export class FilterDatePipePipe implements PipeTransform {
  public slides: any;
  public minValue: Date;
  public maxValue: Date;
  public minValueNumber: Number;
  public maxValueNumber: Number;

  constructor() {

  }
  transform(Slides: any, minValue: Date, maxValue: Date): any {

    this.maxValueNumber = Date.parse(maxValue.toString()) + 86400000;
    this.minValueNumber = Date.parse(minValue.toString());
    if (!Slides) {
      return Slides;

    } else {
      Slides = Slides.filter((el) => {
        el.date = el.dateDeb.seconds * 1000;
        return el.date <= this.maxValueNumber && el.date >= this.minValueNumber;
      }
      );
      return Slides;
    }
  }

}
