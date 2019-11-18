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

    this.maxValueNumber = Date.parse(maxValue.toString());
    this.minValueNumber = Date.parse(minValue.toString());
    if (!Slides) {
      console.log('on filtre pas');
      console.log('ancien tableau:', Slides);
      return Slides;

    } else {
      console.log('on filtre');
      console.log(this.maxValueNumber);
      console.log(this.minValueNumber);
      Slides = Slides.filter((el) => {
        el.date = el.dateDeb.seconds * 1000;
        return el.date <= this.maxValueNumber && el.date >= this.minValueNumber;
      }
      );
      console.log('nouveau tableau:', Slides);
      return Slides;
    }
  }

}
