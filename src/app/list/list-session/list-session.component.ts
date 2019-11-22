import { SessionService } from 'src/app/Service/session.service';
import { ModuleService } from './../../Service/module.service';
import { SujetService } from './../../Service/sujet.service';
import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';




const frenchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) { return `0 van ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} sur ${length}`;
}



@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.sass']
})


export class ListSessionComponent implements AfterViewInit {


  dataSource = new MatTableDataSource<any>();
  displayedColumns = [
    'module',
    'debut',
    'fin',
    'description',
    'sachant',
    'type',
    'Action'
  ];

  public sujet: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private sujetService: SujetService, private moduleService: ModuleService,
    public dialog: MatDialog, private snackBar: MatSnackBar, private sessionService: SessionService) { }

  ngAfterViewInit() {
    this.sessionService.getEverySession().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Résultats par pages';
    this.dataSource.paginator._intl.nextPageLabel = 'Page suivante';
    this.dataSource.paginator._intl.previousPageLabel = 'Page précédente';
    this.dataSource.paginator._intl.firstPageLabel = 'Première page';
    this.dataSource.paginator._intl.lastPageLabel = 'Dernière page';
    this.dataSource.paginator._intl.getRangeLabel = frenchRangeLabel;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  updateSession(idSujet: string, NewIdSujet: string, oldIdModule: string, newIdModule: string, idDoc: string, dateDeb: any, description: string, dateFin: any, sachant: [], followers: []) {
    this.sessionService.updateSession(idSujet, NewIdSujet, oldIdModule, newIdModule, idDoc, dateDeb, description, dateFin, sachant, followers).then(() => {
      this.openSnackBar('Modification Réussie', 'Fermer');
    },
      (error) => {
        this.openSnackBar(' Erreur lors de la sauvegarde', 'Fermer');
      });
  }
  createSession(dateDeb: number, dateFin: number, sachant: any, followers: [], description: string, idSujet: string, idModule: string) {

    this.sessionService.createSession(dateDeb, dateFin, sachant, followers, description, idSujet, idModule);
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(SessionCreate,
      {
        width: '75%',
        height: '65%',
        data: {
        }
      });
    dialogRef.afterClosed().subscribe(m => {
      console.log(m, m[0].date_debut._d);
      if (!m) {
        console.log('On arrête tout');
      } else {
        console.log(m);
        const dateDeb = Date.parse(m[0].date_debut._d) / 1000 + m[0].heure * 60 * 60 + m[0].minute * 60;
        const dateFin = dateDeb + m[0].duree * 60 * 60;
        this.moduleService.getID(m[1].sujet).subscribe(sujet => {
          this.sujet = sujet;
          console.log(this.sujet[0].id);
          this.createSession(dateDeb, dateFin, [], [], m[2].description, this.sujet[0].id, m[1].module);
        });

      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openDialogUpdate(element) {

    const dialogRef = this.dialog.open(SessionDetail, {
      width: '75%',
      height: '65%',
      data: {
        level: element.level,
        titre: element.titre,
        description: element.description,
        sujet: element.sujet,
        idOldSujet: '',
        id: element.id,
      }
    });
    dialogRef.afterClosed().subscribe(m => {
      if (!m) {
        console.log('On arrête tout');
      } else {
        console.log(m);
        if (m[3] !== null) {
          this.moduleService.getID(m[3]).subscribe(sujet => {
            this.sujet = sujet;
            console.log(this.sujet[0].id);
            this.updateSession(m[5], this.sujet[0].id, m[4], m[0], m[1], m[2], m[3]);
          });
        } else {
          this.updateSession(m[5], null, m[4], m[0], m[1], m[2], m[3]);
        }

      }
    });
  }
}


@Component({
  selector: 'SessionDetail',
  templateUrl: './session-detail.html',
  styleUrls: ['./list-session.component.sass']
})
export class SessionDetail {

  private titre = new FormControl('', [Validators.required]);
  private description = new FormControl('', [Validators.required]);
  private levels = new FormControl();
  private sujet = new FormControl();
  sujets: any;
  levelList: number[] = [1, 2, 3];

  constructor(public dialogRef: MatDialogRef<SessionDetail>, @Inject(MAT_DIALOG_DATA)
  public data: any, public sujetService: SujetService, public moduleService: ModuleService) {

    this.getAllSujet();
    this.moduleService.getID(data.sujet).subscribe(sujet => {
      data.idOldSujet = sujet[0].id;
    });
  }

  getAllSujet() {
    this.sujetService.getSujets().subscribe(sujets => {
      this.sujets = sujets;
    });
  }
  getErrorMessage() {
    return this.titre.hasError('required') ? 'Champ vide' :
      this.description.hasError('required') ? 'Champ vide' :
        '';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'SessionCreate',
  templateUrl: './session-create.html',
  styleUrls: ['./list-session.component.sass']
})
export class SessionCreate {


  firstFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  modules: any;
  sujets: any;

  levelList: number[] = [1, 2, 3];
  hours: number[] = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  minutes: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  durees: number[] = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

  constructor(public dialogRef: MatDialogRef<SessionDetail>, @Inject(MAT_DIALOG_DATA) public data: any,
    public sujetService: SujetService, public moduleService: ModuleService, private _formBuilder: FormBuilder) {
    this.getAllSujet();
    this.getAllModules()
    this.firstFormGroup = this._formBuilder.group({
      date_debut: ['', Validators.required],
      heure: ['', Validators.required],
      minute: ['', Validators.required],
      duree: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      sujet: ['', Validators.required],
      module: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      description: ['', Validators.required]
    });

  }
  getErrorMessage() {
    return this.firstFormGroup.hasError('required') ? 'Champ vide' :
      this.thirdFormGroup.hasError('required') ? 'Champ vide' :
        this.forthFormGroup.hasError('required') ? 'Champ vide' :
          '';
  }
  getAllSujet() {
    this.sujetService.getSujets().subscribe(sujets => {
      this.sujets = sujets;
      this.getAllModules();
    });
  }
  getAllModules() {
    this.moduleService.getEveryModule().subscribe(modules => {
      this.modules = modules;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}