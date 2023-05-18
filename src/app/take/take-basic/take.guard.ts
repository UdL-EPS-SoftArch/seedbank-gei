import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Injectable({
  providedIn: 'root'
})
export class TakeGuard {

  constructor(private authenticationService: AuthenticationBasicService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot) {
    let path = "";
    route.url[1] ? path = this.joinPath(route.url) : path = route.url[0].path;
    console.log(path)
    if(path.includes("edit") || path.includes("delete")) {
      if(this.authenticationService.isRole('donor')) return false;
      else if(this.authenticationService.isRole('user')) return false
      else return true
    }
    else if(path.includes("take")) {
      if(this.authenticationService.isRole('user')) return false;
      else if (this.authenticationService.isRole('donor')) return false;
      else return true;
    }
    return true;
  }

  private joinPath(url: UrlSegment[]) {
    let finalPath: string = "";
    url.forEach(segment => {
      finalPath += segment.path + "/";
    });
    finalPath = finalPath.substring(0, finalPath.length - 1);
    return finalPath;
  }

}
