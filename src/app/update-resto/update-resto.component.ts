import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { RouterModule, Router} from '@angular/router';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false;
  editResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private router:ActivatedRoute, private resto:RestoService, private routes:Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.editCurrentResto(this.router.snapshot.params.id).subscribe((result:any)=>{
     this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
      })
    })
  }
collection()
{
  console.warn(this.editResto.value)
  this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
    this.alert=true;
    this.editResto.reset();
    this.routes.navigate(['/list']);
  })
}
closeAlert()
{
  this.alert=false;
}
}
