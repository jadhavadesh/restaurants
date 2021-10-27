import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RestoService} from '../resto.service';
import { RouterModule, Router} from '@angular/router';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
alert:boolean=false;
  addResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private resto:RestoService, private routes: Router) { }

  ngOnInit(): void {
  }
  collectResto(){
    // console.warn(this.addResto.value)
    return this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      this.alert=true;
      this.addResto.reset({});
      this.routes.navigate(['/list']);
    })
    
  }
closeAlert()
{
  this.alert=false;
}
}
