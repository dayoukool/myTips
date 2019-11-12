import { Sujet } from '@core/models/sujet.model';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Module } from '@core/models/module.model';
import { ModuleService } from '../Service/module.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-module-learning',
  templateUrl: './module-learning.component.html',
  styleUrls: ['./module-learning.component.sass']
})
export class ModuleLearningComponent implements AfterViewInit {
  public Modules: Module[];
  public sujetName: string;
  public sujet: any;
  levels = new FormControl();
  levelList: number[] = [1, 2, 3];

  constructor(public moduleService: ModuleService, private activatedRoute: ActivatedRoute) { }


  ngAfterViewInit() {

    this.sujetName = this.activatedRoute.snapshot.params.sujet;
    this.moduleService.getID(this.sujetName).subscribe(sujet => {
      this.sujet = sujet;
      console.log(this.sujet[0].id);
      this.moduleService.getModules(this.sujet[0].id).subscribe(modules => {
        this.Modules = modules;
        console.log(this.Modules);
      });
    });
  }
}
