import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatConfirmDailogComponent } from './mat-confirm-dailog/mat-confirm-dailog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor( private dialog: MatDialog) { }

  openConfirmDialog(){
    this.dialog.open(MatConfirmDailogComponent)
  }
  
}
