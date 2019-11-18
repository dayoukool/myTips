import { Pipe, PipeTransform } from '@angular/core';
import { Session } from '../core/models/session.model';

@Pipe({
  name: 'numbersOfCardFilters'
})
export class NumbersOfCardFiltersPipe implements PipeTransform {
  public slides: any;


  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  transform(Slides: Session[], numberOfCard: number): any {
    console.log('Slides :');
    console.log(Slides);
    console.log('number');
    console.log(numberOfCard);
    if (!Slides || !numberOfCard) {
      console.log('on filtre pas');
      return this.slides = this.chunk(Slides, 3);
    }

    console.log(numberOfCard);
    return Slides = this.chunk(Slides, numberOfCard);
  }

}
