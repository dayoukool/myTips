import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../sessions/session.service';
import { Session } from 'src/app/core/models/session.model';
import { QuestionBase } from '../../dynamicForms/question-base';
import { QuestionService } from '../../dynamicForms/question.service'


@Component({
  selector: 'app-session-summary',
  templateUrl: './session-summary.component.html',
  styleUrls: ['./session-summary.component.sass'],
  providers:[QuestionService]
})
export class SessionSummaryComponent implements OnInit {
  public session: Session;
  public questions:  QuestionBase<any>[];

  constructor(private sessionService: SessionService, private questionService: QuestionService) {
  }
  
  ngOnInit() {
    this.session = this.sessionService.getSession();
    this.questions = this.questionService.getQuestions();
  }

}
