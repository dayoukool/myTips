import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

const AUTH_DELAY = 1500;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  ngOnInit() {}

}
