import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      
      if(localStorage.getItem('username')!= null){
        // console.log(localStorage.getItem('username'));
    return true;
      }
      else
      {
        // window.alert("please login to continue service")
        this.routes.navigate(['']);
        return false;
      }
  }
}