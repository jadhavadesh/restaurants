import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  isAuthenticated =false;
  checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "user" && pwd =="user123"){
localStorage.setItem('username',"admin");
this.isAuthenticated = true;
return true;
}
else{
  this.isAuthenticated = false;
  return false;
}
  }

  deleteLocal(){
    localStorage.clear();
    this.isAuthenticated = false;
  }
}
