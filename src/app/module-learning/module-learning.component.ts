import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Module } from '@core/models/module.model';
import { ModuleService } from './module.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-learning',
  templateUrl: './module-learning.component.html',
  styleUrls: ['./module-learning.component.sass']
})
export class ModuleLearningComponent implements OnInit {
  public Modules: Module[];
  public sujet: string;
  levels = new FormControl();
  levelList: number[] = [1, 2, 3];

  constructor(public moduleService: ModuleService, private activatedRoute: ActivatedRoute) { }

  selectModule(sujet: string): Module[] {
    return this.Modules.filter(el => el.sujet === sujet);

  }

  ngOnInit() {
    this.Modules = this.moduleService.getModule();
    this.sujet = this.activatedRoute.snapshot.params.sujet;
    console.log(this.sujet);
    this.Modules = this.selectModule(this.sujet);
    console.log(this.Modules);
  }
}
