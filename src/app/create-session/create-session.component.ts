import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Sujet {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.sass']
})
export class CreateSessionComponent implements OnInit {
  currentRate: number = 0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  topicCtrl = new FormControl();
  Sujets: Observable<Sujet[]>;

  sujets: Sujet[] = [
    {
      name: 'Jira',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://www.supinfo.com/articles/resources/164203/578/0.png'
    },
    {
      name: 'Confluence',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://craft.atlassian.design/uploads/guidelines/brand/logos/logo-guideline-24@2x_170912_043412.png'
    },
    {
      name: 'Test auto',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/intellimap-the-visual-element-mapper.png?sfvrsn=a51b47d9_1'
    }
  ];
  constructor(private _formBuilder: FormBuilder) {this.Sujets = this.topicCtrl.valueChanges
    .pipe(
      startWith(''),
      map(sujet => sujet ? this._filterSujets(sujet) : this.sujets.slice())
    );
}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      sujetCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }
  private _filterSujets(value: string): Sujet[] {
    const filterValue = value.toLowerCase();

    return this.sujets.filter(sujet => sujet.name.toLowerCase().indexOf(filterValue) === 0);
  }
  private send(){
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
    console.log(this.fourthFormGroup.value);
  }
}
