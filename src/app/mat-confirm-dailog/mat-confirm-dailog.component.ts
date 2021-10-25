import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-confirm-dailog',
  templateUrl: './mat-confirm-dailog.component.html',
  styleUrls: ['./mat-confirm-dailog.component.css']
})
export class MatConfirmDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatConfirmDailogComponent>, private resto:RestoService
    ) { }
    collection:any={};
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    
  }
  deleteResto(item:any){
    this.collection.splice(item-1)
    this.resto.deleteResto(item).subscribe((result)=>{
      console.warn("result", result)
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
