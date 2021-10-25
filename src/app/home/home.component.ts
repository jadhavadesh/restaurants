import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../myservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private myservice:MyserviceService, private router:Router) { }

  ngOnInit(): void {
  }
//   clearLocal(){
// this.myservice.deleteLocal();
// this.router.navigate(['']);
//   }
}
