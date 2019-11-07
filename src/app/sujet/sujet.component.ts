import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SujetService } from '../Service/sujet.service';
import { Sujet } from '@core/models/sujet.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.sass']
})
export class SujetComponent implements OnInit {
  sujetCtrl = new FormControl();
  sujets: any;

  constructor(public sujetService: SujetService, private router: Router) { }

  goToModule(sujet: string) {
    this.router.navigate(['sujets/', sujet]);
  }
  getAllSujet() {
    this.sujetService.getSujets().subscribe(sujets => {
      this.sujets = sujets;
    });
  }

  ngOnInit() {
    this.getAllSujet();
  }





}
