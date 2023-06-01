import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import {joinPath} from "../../guards/join-path";

@Injectable({
  providedIn: 'root'
})
export class TakeGuard {

  constructor(private authenticationService: AuthenticationBasicService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot) {
    let path = "";
    route.url[1] ? path = joinPath(route.url) : path = route.url[0].path;
    console.log(path)
    if(path.includes("edit") || path.includes("delete")) {
      console.log("editdelete")
      if(this.authenticationService.isRole('donor')) return false;
      else if(this.authenticationService.isRole('user')) return false
      else return true
    }
    else if(path === "take") {
      console.log("take")
      return !this.authenticationService.isRole('user');
    } else {
      console.log("else")
      if (this.authenticationService.isRole('user')) return false;
      else return true
    }
    return true;
  }


}
