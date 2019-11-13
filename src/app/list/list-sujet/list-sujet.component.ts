import { SujetService } from './../../Service/sujet.service';
import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Sujet } from '@core/models/sujet.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Validators, FormControl } from '@angular/forms';


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
  selector: 'app-list-sujet',
  templateUrl: './list-sujet.component.html',
  styleUrls: ['./list-sujet.component.sass']
})


export class ListSujetComponent implements AfterViewInit {


  dataSource = new MatTableDataSource<Sujet>();
  displayedColumns = [
    'Img',
    'name',
    'Action'
  ];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private sujetService: SujetService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.sujetService.getSujets().subscribe(data => {
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
  updateSujet(sujetId, type, value) {
    this.sujetService.updateSujet(sujetId, type, value).then(() => {
      this.openSnackBar('Modification Réussie', 'Fermer');
    },
      (error) => {
        this.openSnackBar(' Erreur lors de la sauvegarde', 'Fermer');
      });
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(SujetCreate,
      {
        width: '75%',
        height: '65%',
        data: {
          img: '../../assets/images/default-image.jpg',
        }
      });
    dialogRef.afterClosed().subscribe(sujet => {
      if (!sujet) {
        console.log('On arrête tout');
      } else {
        this.sujetService.createSujet(sujet[1], sujet[0], null);
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openDialogUpdate(element) {

    const dialogRef = this.dialog.open(SujetDetail, {
      width: '75%',
      height: '65%',
      data: {
        name: element.name,
        img: element.img,
        id: element.id,
      }
    });
    dialogRef.afterClosed().subscribe(sujet => {
      if (!sujet) {
        console.log('On arrête tout');
      } else {
        this.updateSujet(sujet[0].id, 'name', sujet[1]);
      }
    });
  }
}


@Component({
  selector: 'SujetDetail',
  templateUrl: './sujet-detail.html',
  styleUrls: ['./list-sujet.component.sass']
})
export class SujetDetail {

  private name = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<SujetDetail>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  getErrorMessage() {
    return this.name.hasError('required') ? 'Champ vide' :
      '';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'SujetCreate',
  templateUrl: './sujet-create.html',
  styleUrls: ['./list-sujet.component.sass']
})
export class SujetCreate {

  private name = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<SujetDetail>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  getErrorMessage() {
    return this.name.hasError('required') ? 'Champ vide' :
      '';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}