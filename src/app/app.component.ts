import { Component } from '@angular/core';
import * as $ from 'jquery';
import {MyserviceService} from './myservice.service';
import { Router} from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurants';
  
 constructor(public myservice:MyserviceService, private router:Router, public authservice:AuthService){}
//  clearLocal(){
//   this.myservice.deleteLocal();
//   this.router.navigate(['']);
  
//     }

signout(){
  this.authservice.signout();
  this.router.navigate(['']);
}
 
}

