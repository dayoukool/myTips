import { SessionService } from 'src/app/Service/session.service';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Module } from '@core/models/module.model';
import { QuestionBase } from 'src/app/dynamicForms/question-base';
import { QuestionService } from 'src/app/dynamicForms/question.service';
import { ModuleService } from '../../Service/module.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, } from '@angular/material/core';
import { Session } from '@core/models/session.model';



@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styleUrls: ['./detail-module.component.sass'],
  providers: [QuestionService]
})

export class DetailModuleComponent implements OnInit {
  @Input() session: Session;
  public questions: QuestionBase<any>[];
  Sachant = false;
  public Modules: Module[];
  public sessions: any;
  public idModule: string;
  public module: any;
  public DateFin = new Date();
  date_debut = new FormControl(new Date());
  date_fin = new FormControl(new Date(this.DateFin.setDate((new Date()).getDate() + 50)));
  public sujetName: string;
  public sujet: any;

  constructor(private questionService: QuestionService, public moduleService: ModuleService,
    private activatedRoute: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit() {

    this.sujetName = this.activatedRoute.snapshot.params.sujet;
    this.idModule = this.activatedRoute.snapshot.params.id;
    this.moduleService.getID(this.sujetName).subscribe(sujet => {
      this.sujet = sujet;
      console.log(this.sujet[0].id);
      this.moduleService.getSingleModule(this.sujet[0].id, this.idModule).subscribe(Module => {
        this.module = Module;
        this.sessionService.getSessions(this.sujet[0].id, this.module.id).subscribe(Session => {
          this.sessions = Session;
          console.log('module :', this.module, 'sessions', this.sessions);
        });
      });
    });
  }
}
