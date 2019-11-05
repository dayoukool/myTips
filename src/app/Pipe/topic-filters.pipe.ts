import { Pipe, PipeTransform } from '@angular/core';
import { Sujet } from '../core/models/sujet.model';

/**
 * @description Pipe qui filtre les sujets
 */
@Pipe({
  name: 'topicFilters'
})
export class TopicFiltersPipe implements PipeTransform {
  public sujets: Sujet[];




  constructor() {

  }
  /**
   * @description Ce pipe filtre les sujets
   * @param Slides Tableau de sujet à trier de type sujet
   *
   * @param Topic  Sujet sélectionné par l'utilisateur de type string
   * @returns Renvoie un tableau de Sujet
   */
  transform(Slides: any, Topic: string): Sujet[] {
    console.log('Slides :');
    console.log(Slides);
    console.log('topic :');
    console.log(Topic);
    if (!Slides || !Topic || Topic == 'Tous') {
      console.log('on filtre pas');
      return Slides;
    }

    console.log('on filtre');
    console.log(Slides.filter(el => el.name === Topic));
    return Slides.filter(el => el.name === Topic);
  }

}
