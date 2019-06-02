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
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {}

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    // this.loadingCtrl
    //   .create({
    //     keyboardClose: true,
    //     message: 'Connexion...'
    //   })
    //   .then(loadingEl => {
    //     loadingEl.present();
    //     setTimeout(() => {
    //       this.isLoading = false;
    //       loadingEl.dismiss();
    //       this.router.navigateByUrl('/tabs/tab-bar/on-site');
    //     }, AUTH_DELAY);
    //   });
  }

  onChangeSite(event) {
    // this.sitesService.setSite(+event);
  }
}
