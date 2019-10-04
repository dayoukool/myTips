import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tipsit';
  constructor() {
    const config = {
      apiKey: 'AIzaSyAPo9duaLDP3LkOKAXYzxRYun_2wyMCnME',
      authDomain: 'tipsit-itce.firebaseapp.com',
      databaseURL: 'https://tipsit-itce.firebaseio.com',
      projectId: 'tipsit-itce',
      storageBucket: '',
      messagingSenderId: '578514595157',
      appId: '1:578514595157:web:822a2dc0a8243fce'
    };
    firebase.initializeApp(config);
  }
}
