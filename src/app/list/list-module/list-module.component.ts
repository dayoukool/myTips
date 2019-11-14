import { ModuleService } from './../../Service/module.service';
import { SujetService } from './../../Service/sujet.service';
import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Sujet } from '@core/models/sujet.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Module } from '@core/models/module.model';



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
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.sass']
})


export class ListModuleComponent implements AfterViewInit {


  dataSource = new MatTableDataSource<Module>();
  displayedColumns = [
    'level',
    'titre',
    'description',
    'sujet',
    'Action'
  ];

  public sujet: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private sujetService: SujetService, private moduleService: ModuleService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.moduleService.getEveryModule().subscribe(data => {
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
  updateModule(oldId: string, newId: string, idDoc: string, titre: string, description: string, level: number, sujet: string) {
    this.moduleService.updateModule(oldId, newId, idDoc, titre, description, level, sujet).then(() => {
      this.openSnackBar('Modification Réussie', 'Fermer');
    },
      (error) => {
        this.openSnackBar(' Erreur lors de la sauvegarde', 'Fermer');
      });
  }
  createModule(titre: string, level: number, sujet: string, description: string, id: string) {
    this.moduleService.createModule(titre, sujet, level, description, id);
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(ModuleCreate,
      {
        width: '75%',
        height: '65%',
        data: {
        }
      });
    dialogRef.afterClosed().subscribe(m => {
      if (!m) {
        console.log('On arrête tout');
      } else {
        console.log('titre', m[0].titre, 'level', m[1].level, 'sujet', m[2].sujet, 'description', m[3].description);
        this.moduleService.getID(m[2].sujet).subscribe(sujet => {
          this.sujet = sujet;
          console.log(this.sujet[0].id);
          this.createModule(m[0].titre, m[1].level, m[2].sujet, m[3].description, this.sujet[0].id);
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

    const dialogRef = this.dialog.open(ModuleDetail, {
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
            this.updateModule(m[5], this.sujet[0].id, m[4], m[0], m[1], m[2], m[3]);
          });
        } else {
          this.updateModule(m[5], null, m[4], m[0], m[1], m[2], m[3]);
        }

      }
    });
  }
}


@Component({
  selector: 'ModuleDetail',
  templateUrl: './module-detail.html',
  styleUrls: ['./list-module.component.sass']
})
export class ModuleDetail {

  private titre = new FormControl('', [Validators.required]);
  private description = new FormControl('', [Validators.required]);
  private levels = new FormControl();
  private sujet = new FormControl();
  sujets: any;
  levelList: number[] = [1, 2, 3];

  constructor(public dialogRef: MatDialogRef<ModuleDetail>, @Inject(MAT_DIALOG_DATA)
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
  selector: 'ModuleCreate',
  templateUrl: './module-create.html',
  styleUrls: ['./list-module.component.sass']
})
export class ModuleCreate {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  sujets: any;
  levelList: number[] = [1, 2, 3];


  constructor(public dialogRef: MatDialogRef<ModuleDetail>, @Inject(MAT_DIALOG_DATA) public data: any, public sujetService: SujetService, private _formBuilder: FormBuilder) {
    this.getAllSujet();
    this.firstFormGroup = this._formBuilder.group({
      titre: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      level: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      sujet: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      description: ['', Validators.required]
    });

  }
  getErrorMessage() {
    return this.firstFormGroup.hasError('required') ? 'Champ vide' :
      this.secondFormGroup.hasError('required') ? 'Champ vide' :
        this.thirdFormGroup.hasError('required') ? 'Champ vide' :
          this.forthFormGroup.hasError('required') ? 'Champ vide' :
            '';
  }
  getAllSujet() {
    this.sujetService.getSujets().subscribe(sujets => {
      this.sujets = sujets;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}