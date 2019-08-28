import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SujetService } from './sujet.service';
import { Sujet } from '@core/models/sujet.model';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.sass']
})
export class SujetComponent implements OnInit {
  public Sujets: Sujet[];
  sujetCtrl = new FormControl();

  constructor(public sujetService: SujetService) { }

  ngOnInit() {
    this.Sujets = this.sujetService.getSujet();
    console.log(this.Sujets);
  }

}
