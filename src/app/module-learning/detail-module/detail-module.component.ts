import { Component, OnInit, Input, Inject } from '@angular/core';
import { Module } from '@core/models/module.model';
import { QuestionBase } from 'src/app/dynamicForms/question-base';
import { QuestionService } from 'src/app/dynamicForms/question.service';
import { ModuleService } from '../module.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {  MAT_DATE_LOCALE } from '@angular/material/core';
import { Session } from '@core/models/session.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styleUrls: ['./detail-module.component.sass'],
  providers: [QuestionService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ]
})

export class DetailModuleComponent implements OnInit {
  public questions: QuestionBase<any>[];
  public Modules: Module[];
  public idModule: number;
  public Module: Module;
  date_debut = new FormControl(new Date());
  date_fin = new FormControl(new Date());
  public session: Session;


  constructor(private questionService: QuestionService, public moduleService: ModuleService, private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.Modules = this.moduleService.getModule();
    // console.log(this.Modules);
    this.idModule = this.activatedRoute.snapshot.params.id;
    // console.log(this.idModule);
    this.Module = this.selectModuleById(this.idModule);
    console.log(this.Module);
    this.questions = this.questionService.getQuestions(this.Module);
  }


  selectModuleById(id: number): Module {
    // console.log(this.Modules.find(mod => mod.id == id));
    return this.Modules.find(el => el.id == id);

  }
  openDialog(): void {
    console.log(this.session);
    const dialogRef = this.dialog.open(SessionModal, {
      width: '250px',
      data: { session: this.session }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.session = result;
    });
  }
}

@Component({
  selector: 'session-modal',
  templateUrl: 'session-modal.html',
})
export class SessionModal {

  constructor(
    public dialogRef: MatDialogRef<SessionModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
