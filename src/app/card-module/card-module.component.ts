import { Component, OnInit, Input } from '@angular/core';
import { Module } from '@core/models/module.model';

@Component({
  selector: 'app-card-module',
  templateUrl: './card-module.component.html',
  styleUrls: ['./card-module.component.sass']
})
export class CardModuleComponent implements OnInit {
  @Input() module: Module;

  constructor() { }

  ngOnInit() {

  }

}
