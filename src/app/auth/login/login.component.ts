import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RouterModule, Routes, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
// MDB Angular Free
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md'
// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  successMessage = '';

  constructor(private _myservice: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.loginForm = new FormGroup(
      {
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

 

  IsValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }



  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);

  login() {

    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this.router.navigate(['/wall']);
          },
          error => this.successMessage = 'Invalid Email Or Password'
        );
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
