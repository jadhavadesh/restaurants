import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatConfirmDailogComponent } from './mat-confirm-dailog/mat-confirm-dailog.component';
import { MatEditDialogComponent } from './mat-edit-dialog/mat-edit-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor( private dialog: MatDialog) { }

  openConfirmDialog(){
   return this.dialog.open(MatConfirmDailogComponent,{
      
      panelClass: 'confirm-dialog-container',
      disableClose:true
    });
  }
  
  openEditDialog(){
    return this.dialog.open(MatEditDialogComponent,{
      
       panelClass: 'confirm-dialog-container',
       disableClose:true
     });
   }
}
