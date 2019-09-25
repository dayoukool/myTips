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
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 1, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 2, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
  { Date: new Date(25 / 12 / 2020), Auteur: 'Doe', Sujet: 'Jira', Module: 3, DateVoulu: new Date(13 / 5 / 2021), Action: 'coucou' },
];

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
  }

  applyFilter(filterValue: string) {
    this.demandeDeSessionsArray.filter = filterValue.trim().toLowerCase();

    if (this.demandeDeSessionsArray.paginator) {
      this.demandeDeSessionsArray.paginator.firstPage();
    }
  }
}
