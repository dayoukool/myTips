import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../sessions/session.service';
import { Session } from 'src/app/core/models/session.model';
import { QuestionBase } from '../../dynamicForms/question-base';
import { QuestionService } from '../../dynamicForms/question.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


@Component({
  selector: 'app-session-summary',
  templateUrl: './session-summary.component.html',
  styleUrls: ['./session-summary.component.sass'],
  providers:[QuestionService]
})
export class SessionSummaryComponent implements OnInit {
  @Input() session: Session;
  public questions:  QuestionBase<any>[];
  public learners;
  constructor(private sessionService: SessionService, private questionService: QuestionService) {
  }

  ngOnInit() {
    console.log("card = ",this.session);
    this.questions = this.questionService.getQuestions(this.session);
    this.learners=this.session.learners;
  }

}
