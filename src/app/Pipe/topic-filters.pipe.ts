import { Pipe, PipeTransform } from '@angular/core';
import { SujetComponent } from 'src/app/sujet/sujet.component';
import { SujetService } from 'src/app/sujet/sujet.service';
import { Sujet } from '../core/models/sujet.model';

@Pipe({
  name: 'topicFilters'
})
export class TopicFiltersPipe implements PipeTransform {
  public sujets: Sujet[];




  constructor(private Sujets: SujetComponent, private sujetService: SujetService) {

  }
  transform(Slides: Sujet[], Topic: string): Sujet[] {
    console.log('Slides :');
    console.log(Slides);
    console.log('topic :');
    console.log(Topic);
    if (!Slides || !Topic || Topic == 'Tous') {
      console.log('on filtre pas');
      return Slides;
    }
    this.sujets = this.sujetService.getSujet();
    console.log('on filtre');
    console.log(this.sujets.filter(el => el.sujet === Topic));
    return this.sujets.filter(el => el.sujet === Topic);
  }

}
