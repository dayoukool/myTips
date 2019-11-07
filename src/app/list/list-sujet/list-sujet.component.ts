import { SujetService } from './../../Service/sujet.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';

export interface PeriodicElement {
  id: string;
  img: string;
  name: string;
  Action: any;
}


const frenchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 van ${length}`; }

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


export class ListSujetComponent implements OnInit {

  displayedColumns: string[] = ['Img', 'Sujet', 'Action'];
  sujetArray: any;
  public sujets: any;
  constructor(public sujetService: SujetService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  getAllSujet() {
    return this.sujetService.getAllSujet().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(sujets => {
      this.sujets = sujets;
      console.log(this.sujets);
      this.sujetArray = new MatTableDataSource<PeriodicElement>(this.sujets);
      this.sujetArray.paginator = this.paginator;
      this.sujetArray.sort = this.sort;
      this.sujetArray.paginator._intl.itemsPerPageLabel = 'Résultats par pages';
      this.sujetArray.paginator._intl.nextPageLabel = 'Page suivante';
      this.sujetArray.paginator._intl.previousPageLabel = 'Page précédente';
      this.sujetArray.paginator._intl.firstPageLabel = 'Première page';
      this.sujetArray.paginator._intl.lastPageLabel = 'Dernière page';
      this.sujetArray.paginator._intl.getRangeLabel = frenchRangeLabel;

    });
  }
  ngOnInit() {
    this.getAllSujet();

  }



  applyFilter(filterValue: string) {
    this.sujetArray.filter = filterValue.trim().toLowerCase();

    if (this.sujetArray.paginator) {
      this.sujetArray.paginator.firstPage();
    }
  }
}
