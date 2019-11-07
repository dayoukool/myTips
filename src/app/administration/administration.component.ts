import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.sass']
})
export class AdministrationComponent implements OnInit {

  constructor(public router: Router) { }

  goToAdministration(type: string) {
    this.router.navigate(['administration/', type]);
  }
  ngOnInit() {
  }

  
}
