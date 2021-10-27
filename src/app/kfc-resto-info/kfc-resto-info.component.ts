import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ListRestoComponent} from '../list-resto/list-resto.component'
@Component({
  selector: 'app-kfc-resto-info',
  templateUrl: './kfc-resto-info.component.html',
  styleUrls: ['./kfc-resto-info.component.css']
})
export class KfcRestoInfoComponent implements OnInit {
  restaurantId:any;
  constructor() { }

  ngOnInit(): void {
    this.restaurantId= window.location.href.split("/").pop();
    console.log(this.restaurantId);
  
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
