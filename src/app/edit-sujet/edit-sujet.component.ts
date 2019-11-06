import { SujetService } from '../Service/sujet.service';
import { Sujet } from '../core/models/sujet.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { reject } from 'q';
import { mapTo, map } from 'rxjs/operators';

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
  constructor(public sujetService: SujetService) {

  }

  getSingleSujet(idDoc) {
    this.sujetService.getSingleSujet(idDoc).snapshotChanges().pipe(map(c =>
          ({ id: c.payload.id, ...c.payload.data() })
        )
      
    ).subscribe(sujet => {
      this.sujet = sujet;
    });
  }
  ngOnInit() {
    this.idDoc = 'H5OgSEhduQvPi0JvrBQ7';
    this.sujet = this.getSingleSujet(this.idDoc);
    console.log('le sujet est:', this.sujet);
  }



}
