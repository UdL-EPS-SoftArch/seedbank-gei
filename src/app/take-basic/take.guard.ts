import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationBasicService} from "../login-basic/authentication-basic.service";

@Injectable({
  providedIn: 'root'
})
export class TakeGuard {

  constructor(private authenticationService: AuthenticationBasicService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot) {
    let path = "";
    route.url[1] ? path = route.url[0].path + '/' + route.url[1].path : path = route.url[0].path;
    if(path === "take") {
      if(this.authenticationService.isRole('user')) return false
      else return true
    }
    if(path === "take/add") {
      if(this.authenticationService.isRole('user') || this.authenticationService.isRole('donor')) return false
      else return true
    }
    return true;
  }

}
