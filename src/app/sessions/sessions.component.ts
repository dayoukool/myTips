import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from './session.service';
import { Session } from '../core/models/session.model';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.sass'],
  providers: [NgbCarouselConfig]
})
export class SessionsComponent implements OnInit {
  public sessions : Session[];
  public cards : Session [];
  public date: Date;
  public jour: number;
  public dateAdded: Date;
  public dateTransformed: DataCue;
  private slides: any = [[]];
  public minValue: number = 0;
  public maxValue: number = 50;
  public options: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          //renvoie la date après calcul au format FR
          return '<b>Date</b> ' + this.addDate(value).toLocaleString('fr-FR' ,{weekday : 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone : 'UTC'});
        case LabelType.High:
            return '<b>Date</b> ' + this.addDate(value).toLocaleString('fr-FR' ,{weekday : 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone : 'UTC'});
        default:
          return '<b>Date</b> ' + this.addDate(value).toLocaleString('fr-FR' ,{weekday : 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone : 'UTC'});
      }
    }
  };

  constructor(public sessionService : SessionService) {

  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  //fonction qui ajoute la valeur du sélecteur pour obtenir une date futur
  addDate(dateAdd){
    this.date= new Date();
    this.jour=this.date.getDate() + dateAdd;
    this.date.setDate(this.jour);
    this.dateAdded= this.date;
    return this.dateAdded;
  }

  ngOnInit() {
    this.cards=this.sessionService.getSessions();
    this.slides = this.chunk(this.cards, 3);
    this.sessions=this.cards;
    console.log(this.slides);
    console.log(this.cards);
    this.date=new Date();
  }
}
