import { SujetService } from '../Service/sujet.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(public sujetService: SujetService, private snackBar: MatSnackBar) {

  }


  ngOnInit() {
    this.idDoc = 'H5OgSEhduQvPi0JvrBQ7';
    this.sujet = this.sujetService.getSingleSujet(this.idDoc).subscribe(sujet => {
      this.sujet = sujet;
    });
    
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
}

