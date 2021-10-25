import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component'
import {AuthGuard} from './auth.guard'

import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'add', 
    component:AddRestoComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'update/:id',
    component:UpdateRestoComponent
  },

  
  {
    path:'list', 
    component:ListRestoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
