import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-mat-edit-dialog',
  templateUrl: './mat-edit-dialog.component.html',
  styleUrls: ['./mat-edit-dialog.component.css']
})
export class MatEditDialogComponent implements OnInit {
  // editResto = new FormGroup({
  //   name: new FormControl(''),
  //   address: new FormControl(''),
  //   email: new FormControl('')
  // })
  constructor(public dialogRef: MatDialogRef<MatEditDialogComponent>, private resto:RestoService,private router:ActivatedRoute, ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   console.warn(this.router.snapshot.params.id)
  //   this.resto.editCurrentResto(this.router.snapshot.params.id).subscribe((result:any)=>{
  //    this.editResto = new FormGroup({
  //       name: new FormControl(result['name']),
  //       address: new FormControl(result['address']),
  //       email: new FormControl(result['email'])
  //     })
  //   })
  // }
  // collection()
  // {
  //   console.warn(this.editResto.value)
  //   this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
     
  //     this.editResto.reset();
  //   })
  // }
}
