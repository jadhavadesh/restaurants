import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {KfcRestoInfoComponent} from '../kfc-resto-info/kfc-resto-info.component';
import { DialogServiceService } from '../dialog-service.service';
import { RouterModule, Router} from '@angular/router';
import {RestoService} from '../resto.service';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  
  constructor(private resto:RestoService, private dialogservice:DialogServiceService, private router:Router) { }
collection:any={};
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    })
  }
  
  deleteResto(item:any)
  {
//     this.collection.splice(item-1,1)
//   this.resto.deleteResto(item).subscribe((result)=>{
//     console.warn(result);
//   });
// }
  this.dialogservice.openConfirmDialog()
  .afterClosed().subscribe((res:any)=>{
    if(res){
      this.collection.splice(item-1,1)
   this.resto.deleteResto(item).subscribe((result)=>{
    console.warn(result);
    });
  }
});
  }

  EditResto(){
    this.dialogservice.openEditDialog()
  }
data:any;
  onRowSelect(e:any){
    console.log(e);
   this.data= e;
    this.router.navigate([`kfc/${e.id}`]);

  }

  
  // onDelete(){
  //   this.dialogservice.openConfirmDialog();
  // }
}
// function afterClosed() {
//   throw new Error('Function not implemented.');
// }

