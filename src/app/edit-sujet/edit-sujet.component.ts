import { SujetService } from '../Service/sujet.service';
import { Sujet } from '../core/models/sujet.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { reject } from 'q';

@Component({
  selector: 'app-edit-sujet',
  templateUrl: './edit-sujet.component.html',
  styleUrls: ['./edit-sujet.component.sass']
})
export class EditSujetComponent implements OnInit {

  public sujet: any;
  private idDoc: string;
  private name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'Champ vide' :
          '';
  }
  constructor(public SujetService: SujetService) {

  }

  ngOnInit() {
    this.idDoc = 'H5OgSEhduQvPi0JvrBQ7';
    this.sujet = this.SujetService.getSujet(this.idDoc);
    console.log('le sujet est:', this.sujet);
  }



}
