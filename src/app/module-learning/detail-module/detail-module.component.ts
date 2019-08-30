import { Component, OnInit, Input } from '@angular/core';
import { Module } from '@core/models/module.model';
import { QuestionBase } from 'src/app/dynamicForms/question-base';
import { QuestionService } from 'src/app/dynamicForms/question.service';
import { ModuleService } from '../module.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styleUrls: ['./detail-module.component.sass'],
  providers: [QuestionService]
})
export class DetailModuleComponent implements OnInit {
  public questions: QuestionBase<any>[];
  public Modules: Module[];
  public idModule: number;
  public Module: Module;


  constructor(private questionService: QuestionService, public moduleService: ModuleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Modules = this.moduleService.getModule();
    console.log(this.Modules);
    this.idModule = this.activatedRoute.snapshot.params.id;
    console.log(this.idModule);
    this.Module = this.selectModuleById(this.idModule);
    console.log(this.Module);
    this.questions = this.questionService.getQuestions(this.Module);
  }


  selectModuleById(id: number): Module {
    console.log(this.Modules.find(mod => mod.id == id));
    return this.Modules.find(el => el.id == id);

  }
}
