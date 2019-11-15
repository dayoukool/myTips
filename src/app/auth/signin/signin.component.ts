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


  signinForm: FormGroup;
  errorMessage: string;
  hide = true;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }




  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.SignIn(email, password).then(res => {
      console.log('Vous êtes connecté');
      this.router.navigate(['/sujets']);
    })
      .catch(err => {
        console.log('Erreur:', err.message, err.code);
        if(err.code ==='auth/user-not-found'){
          this.errorMessage ='L\'email n\existe pas';
        }
        if(err.code ==='auth/wrong-password'){
          this.errorMessage ='Mot de passe incorrect';
        }
        return this.errorMessage;
      });
    console.log(this.errorMessage);
  }
}