import { Pipe, PipeTransform } from '@angular/core';
import { SessionsComponent } from 'src/app/sessions/sessions.component';
import { SessionService } from 'src/app/sessions/session.service';
import { Session } from '../core/models/session.model';

@Pipe({
  name: 'numberOfResearchPipe'
})
export class NumberOfResearchPipePipe implements PipeTransform {

  public slides: any;
  public numberOfResult: string;




  constructor(private Sessions: SessionsComponent, private sessionService: SessionService) {

  }
  transform(Slides: Session[]): any {
    this.numberOfResult = ""+Slides.length+" résultat(s)";
    console.log(Slides);
    console.log(this.numberOfResult);
    document.getElementById('result').setAttribute("value",this.numberOfResult);
    return Slides;
  }

}
