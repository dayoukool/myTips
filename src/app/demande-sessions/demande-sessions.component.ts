import { Sujet } from './../create-session/create-session.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



export interface PeriodicElement {
  Date: Date;
  Auteur: string;
  Sujet: string;
  Module: number;
  DateVoulu: Date;
  Action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Date: new Date('December 11, 2020 11:30:00'), Auteur: 'Doe', Sujet: 'Jira', Module: 1, DateVoulu: new Date('December 16, 2020 10:30:00'), Action: 'coucou' },
  { Date: new Date('November 4, 2020 12:30:00'), Auteur: 'Doe', Sujet: 'Test auto', Module: 2, DateVoulu: new Date('December 1, 2020 09:30:00'), Action: 'coucou' },
  { Date: new Date('October 15, 2020 08:30:00'), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date('November 16, 2020 15:30:00'), Action: 'coucou' },
  { Date: new Date('December 22, 2020 09:30:00'), Auteur: 'Jhon', Sujet: 'Jira', Module: 2, DateVoulu: new Date('January 5, 2021 14:30:00'), Action: 'coucou' },
  { Date: new Date('November 13, 2020 16:30:00'), Auteur: 'Doe', Sujet: 'Test auto', Module: 1, DateVoulu: new Date('December 4, 2020 10:30:00'), Action: 'coucou' },
  { Date: new Date('October 6, 2020 17:30:00'), Auteur: 'Eric', Sujet: 'Jira', Module: 3, DateVoulu: new Date('November 18, 2020 08:30:00'), Action: 'coucou' },
  { Date: new Date('December 18, 2020 18:30:00'), Auteur: 'Doe', Sujet: 'Confluence', Module: 1, DateVoulu: new Date('January 17, 2020 08:30:00'), Action: 'coucou' },
  { Date: new Date('November 28, 2020 14:30:00'), Auteur: 'Jacques', Sujet: 'Jira', Module: 3, DateVoulu: new Date('December 18, 2020 11:30:00'), Action: 'coucou' },
  { Date: new Date('October 26, 2020 13:30:00'), Auteur: 'Doe', Sujet: 'Test auto', Module: 2, DateVoulu: new Date('November 19, 2020 11:30:00'), Action: 'coucou' },
  { Date: new Date('December 30, 2020 17:30:00'), Auteur: 'Nicolas', Sujet: 'Confluence', Module: 1, DateVoulu: new Date('January 5, 2021 07:30:00'), Action: 'coucou' },
  { Date: new Date('November 13, 2020 15:30:00'), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date('January 8, 2021 07:30:00'), Action: 'coucou' },
  { Date: new Date('October 12, 2020 10:30:00'), Auteur: 'François', Sujet: 'Jira', Module: 1, DateVoulu: new Date('November 9, 2020 07:30:00'), Action: 'coucou' },
  { Date: new Date('November 6, 2020 9:30:00'), Auteur: 'Doe', Sujet: 'Confluence', Module: 3, DateVoulu: new Date('November 30, 2020 07:30:00'), Action: 'coucou' },
  { Date: new Date('December 17, 2020 8:30:00'), Auteur: 'Emmanuel', Sujet: 'Jira', Module: 2, DateVoulu: new Date('January 29, 2021 15:30:00'), Action: 'coucou' },
  { Date: new Date('November 9, 2020 15:30:00'), Auteur: 'Valérie', Sujet: 'Confluence', Module: 3, DateVoulu: new Date('December 03, 2020 15:30:00'), Action: 'coucou' },
  { Date: new Date('December 7, 2020 14:30:00'), Auteur: 'Doe', Sujet: 'Test auto', Module: 2, DateVoulu: new Date('December 18, 2020 15:30:00'), Action: 'coucou' },
];

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
  selector: 'app-demande-sessions',
  templateUrl: './demande-sessions.component.html',
  styleUrls: ['./demande-sessions.component.sass']
})



export class DemandeSessionsComponent implements OnInit {

  displayedColumns: string[] = ['Date', 'Auteur', 'Sujet', 'Module', 'DateVoulu', 'Action'];
  demandeDeSessionsArray = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.demandeDeSessionsArray.paginator = this.paginator;
    this.demandeDeSessionsArray.sort = this.sort;
    this.demandeDeSessionsArray.paginator._intl.itemsPerPageLabel = 'Résultats par pages';
    this.demandeDeSessionsArray.paginator._intl.nextPageLabel = 'Page suivante';
    this.demandeDeSessionsArray.paginator._intl.previousPageLabel = 'Page précédente';
    this.demandeDeSessionsArray.paginator._intl.firstPageLabel = 'Première page';
    this.demandeDeSessionsArray.paginator._intl.lastPageLabel = 'Dernière page';
    this.demandeDeSessionsArray.paginator._intl.getRangeLabel = frenchRangeLabel;
  }



  applyFilter(filterValue: string) {
    this.demandeDeSessionsArray.filter = filterValue.trim().toLowerCase();

    if (this.demandeDeSessionsArray.paginator) {
      this.demandeDeSessionsArray.paginator.firstPage();
    }
  }
}
