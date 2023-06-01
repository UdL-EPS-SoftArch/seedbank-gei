import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Injectable({
  providedIn: 'root'
})
export class RequestGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationBasicService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const LIST_PATH: string = "requests"
    const DETAIL_PATH: RegExp = /requests\/\d+/
    return true
  }
}
