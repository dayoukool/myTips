import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  private email = new FormControl('', [Validators.required, Validators.email]);
  private password = new FormControl('', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]);
  signinForm: FormGroup;
  errorMessage: string;
  getErrorMessage() {
    return this.email.hasError('required') ? 'Champ vide' :
      this.email.hasError('email') ? 'l\'addresse n\'est pas au bon format' :
        '';
  }
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    
  }



  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/sujets']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}