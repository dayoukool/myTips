import { Injectable } from '@angular/core';
import * as sujetData from './data/sujet.json';
import { Sujet } from '@core/models/sujet.model';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor() { }

  public getSujet(): Sujet[] {
    let retSujet: Sujet[] = [];
    sujetData.sujets.forEach(suj => {
      retSujet.push(new Sujet().deserialize(suj));
    });
    return retSujet;
  }
}
