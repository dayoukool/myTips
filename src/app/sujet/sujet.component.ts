import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SujetService } from './sujet.service';
import { Sujet } from '@core/models/sujet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.sass']
})
export class SujetComponent implements OnInit {
  public Sujets: Sujet[];
  sujetCtrl = new FormControl();

  constructor(public sujetService: SujetService, private router: Router) { }

  goToModule(sujet: string){
    this.router.navigate(['sujets/', sujet ]);
  }

  ngOnInit() {
    this.Sujets = this.sujetService.getSujet();
    console.log(this.Sujets);
  }

}
