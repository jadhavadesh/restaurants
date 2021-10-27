import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-mat-edit-dialog',
  templateUrl: './mat-edit-dialog.component.html',
  styleUrls: ['./mat-edit-dialog.component.css']
})
export class MatEditDialogComponent implements OnInit {
  addResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
  constructor(public dialogRef: MatDialogRef<MatEditDialogComponent>, private resto:RestoService,private router:ActivatedRoute) { }
  
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.editCurrentResto(this.router.snapshot.params.id).subscribe((result:any)=>{
   this.addResto = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
      })
    })
  }
  collection()
  {
    console.warn(this.addResto.value)
    this.resto.updateResto(this.router.snapshot.params.id,this.addResto.value).subscribe((result)=>{
     
      this.addResto.reset();
    })
  }
}
