import { Injectable, NgZone } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { idToken } from 'rxfire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _afa:AngularFireAuth, public router:Router, private ngzone:NgZone) { 
    this._afa.onAuthStateChanged(user=>{
      if(user){
         user?.getIdToken().then(idToken=>{
          this.router.navigate(['/list']);
          let userObj = {
            user: {
              email: user.email
            },
            token:idToken
          }
          sessionStorage.setItem('userData',JSON.stringify(userObj));
          ngzone.run(()=>{
            this.router.navigate(['']);
          });
       })
       
      }else{
        ngzone.run(()=>{
          this.router.navigate(['']);
        });
      }
    })
  }
  
  isAuthenticated =false;

  
  signin(email:string, password:string, onSuccess:any, onError:any){
    this._afa.signInWithEmailAndPassword(email, password).then(result=>{
      console.log(result);
      onSuccess();
      console.log("Login Success");
      this.isAuthenticated = true;
      this.router.navigate(['/list']);
      // result.user?.getIdToken().then(idToken=>{
      //   console.log(idToken);
      // })
    })
    .catch(error =>{
      console.log(error);
      onError();
      this.isAuthenticated = false;
    })
  }

  signout(){
    this._afa.signOut().then(()=>{
      sessionStorage.setItem('userData', "")
      console.log("Logout Success");
      this.isAuthenticated = false;
    })
    .catch(error =>console.log(error));
  }

  getUserData(){
    let userData = sessionStorage.getItem('userData');
    if(userData){
      return JSON.parse(userData)
    }else{
      return null;
    }
  }
}