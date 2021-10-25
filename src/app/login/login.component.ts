import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';
import { AuthService } from '../core/services/auth.service';


import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginMode:boolean = true;

  // UserSignIn = new FormGroup({
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //    })
  form:FormGroup;
    
  constructor(private fb:FormBuilder, private service : MyserviceService , private routes: Router,private authservice:AuthService) {
    this.form=fb.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required]]

    });
   }
  msg:any;
  ngOnInit(): void {
    // this.UserSignIn = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // })
  }
  // check method of local storage
//   check(uname: string, p : string)
//   {
  
//     var output = this.service.checkusernameandpassword(uname, p);
//     if(output == true)
//     {
      
//       this.routes.navigate(['/list']);
     
//     }
//     else{
      
// this.msg ='Invalid username or password';
//     }
//   }


signin(){
console.log(this.form.value);
if(this.form.valid){
  this.authservice.signin(this.form.value.email, this.form.value.password, ()=>{
    console.log("success");
  },
  ()=>{
    this.msg = 'Invalid username or password';
    console.log("failed");
  });
}
}



  // onModeSwitch(){
  //   this.loginMode = !this.loginMode;
  // }
//   onSubmit(){
//     if(this.UserSignIn.valid){
//     console.log(this.UserSignIn.value)
//   }else{

//   }
// }

}
