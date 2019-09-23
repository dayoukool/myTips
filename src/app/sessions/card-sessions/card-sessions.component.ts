import { Component, OnInit, Input, Inject } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from 'src/app/core/models/session.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'SessionDetail',
  templateUrl: './session-detail.html',
  styleUrls: ['./card-sessions.component.sass']
})
export class SessionDetail {

  constructor(public dialogRef: MatDialogRef<SessionDetail>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-card-sessions',
  templateUrl: './card-sessions.component.html',
  styleUrls: ['./card-sessions.component.sass']
})
export class CardSessionsComponent implements OnInit {
  @Input() session: Session;
  public learners;
  constructor(private sessionService: SessionService, public dialog: MatDialog) {
  }

  openDialog() {
    console.log('session =', this.session);
    const dialogRef = this.dialog.open(SessionDetail, {
      width: '75%',
      height: '60%',
      data: {
        session: this.session,
        learners: this.learners,

      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // result = !result;
      console.log('result = !result', result);
      if (result === true) {
        console.log('la modal a été fermé et tu es inscrit');
        this.session.inscrit = result;
      } else if (result === false) {
        console.log('la modal a été fermé et tu es désinscrit');
        this.session.inscrit = result;
      } else {
        console.log('tu as fermé la modal sans cliqué sur un bouton, rien n\'a changé');
      }

    });
  }
  ngOnInit() {
    console.log("card = ", this.session);
    this.learners = this.session.learners;
  }

}

