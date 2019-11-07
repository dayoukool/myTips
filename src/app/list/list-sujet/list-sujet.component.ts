import { SujetService } from './../../Service/sujet.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Sujet } from '@core/models/sujet.model';


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


export class ListSujetComponent implements AfterViewInit {


  dataSource = new MatTableDataSource<Sujet>();
  displayedColumns = [
    'Img',
    'name',
    'Action'
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private sujetService: SujetService) { }

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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}