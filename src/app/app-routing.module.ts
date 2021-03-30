import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from '../app/auth/signup/signup.component';
import {LoginComponent} from '../app/auth/login/login.component';
import {WallComponent} from '../app/shared/wall/wall.component';
import {UserProfileComponent} from '../app/user/user-profile/user-profile.component'
import { from } from 'rxjs';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'',
      component:LoginComponent
    },
    {
      path:'wall',
      component:WallComponent
    },
    {
      path:'user',
      component:UserProfileComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
