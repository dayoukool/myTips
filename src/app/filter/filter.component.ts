import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  topics = new FormControl();
  topicList: string[] = ['Jira','Confluence','Test auto'];

  constructor() {
  }


  ngOnInit() {
  }

}
