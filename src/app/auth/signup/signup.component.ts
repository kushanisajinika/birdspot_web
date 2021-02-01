import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {AuthService} from '../auth.service';
import { RouterModule, Routes, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
// MDB Angular Free
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md'
// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  successMessage = '';

  constructor(private _myservice: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      MobileNo: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }
  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }


  register() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this._myservice.submitRegister(this.myForm.value)
        .subscribe(
          data => this.successMessage = 'Registration success',
          error => this.successMessage = 'Some error'
        );
    }
  }
}


