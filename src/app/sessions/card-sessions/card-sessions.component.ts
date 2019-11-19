import { Component, OnInit, Input, Inject, AfterViewInit } from '@angular/core';
import { SessionService } from '../../Service/session.service';
import { Session } from 'src/app/core/models/session.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionService } from 'src/app/dynamicForms/question.service';
import { QuestionBase } from '../../dynamicForms/question-base';


@Component({
  selector: 'SessionDetail',
  templateUrl: './session-detail-stepper.html',
  styleUrls: ['./card-sessions.component.sass']
})
export class SessionDetail {
  public sachant: any;

  constructor(public dialogRef: MatDialogRef<SessionDetail>, @Inject(MAT_DIALOG_DATA) public data: any, public sessionService: SessionService) {

    console.log(data.session.sachant);
    this.sessionService.getSachant(data.session.sachant).subscribe(Sachant => {
      this.sachant = Sachant.data;
      console.log(this.sachant);
    }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-card-sessions',
  templateUrl: './card-sessions.component.html',
  styleUrls: ['./card-sessions.component.sass']
})
export class CardSessionsComponent implements AfterViewInit {
  @Input() session: any;
  public questions: QuestionBase<any>[];
  public learners;
  constructor(private sessionService: SessionService, public dialog: MatDialog, private questionService: QuestionService) {
  }

  openDialog() {
    console.log('session =', this.session);
    const dialogRef = this.dialog.open(SessionDetail, {
      width: '75%',
      height: '65%',
      data: {
        session: this.session,

      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('la modal a été fermé et tu es inscrit');
        this.session.inscrit = result;
      } else if (result === false) {
        console.log('la modal a été fermé et tu es désinscrit');
        this.session.inscrit = result;
      } else {
        console.log('tu as fermé la modal sans cliquer sur un bouton, rien n\'a changé');
      }

    });
  }
  ngAfterViewInit() {
    console.log("card = ", this.session.dateDeb.seconds);
    // this.learners = this.session.learners;
    // this.questions = this.questionService.getQuestions(this.session);
  }

}

