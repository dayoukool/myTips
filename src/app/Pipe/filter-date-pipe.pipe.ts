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
  public minDate: Date;
  public maxDate: Date;

  constructor(private Sessions: SessionsComponent, private sessionService: SessionService) {

  }
  transform(Slides: Session[], minValue:number, maxValue:number ): any {
    console.log('Slides :');
    console.log(Slides);
    console.log('minValue :');
    console.log(minValue);
    console.log(maxValue);
      if (!Slides ){
        console.log('on filtre pas');
        return Slides;
      }
    console.log('on filtre');
    this.minDate = this.Sessions.addDate(minValue);
    this.maxDate = this.Sessions.addDate(maxValue);
    console.log('dates :');
    console.log(this.minDate);
    console.log(this.maxDate);
    Slides = Slides.filter((el)=>{ return new Date(el.date) <= this.maxDate && new Date(el.date) >= this.minDate }
    );
    console.log(Slides);
    return Slides;
  }

}
