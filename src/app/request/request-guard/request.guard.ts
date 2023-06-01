import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import {joinPath} from "../../guards/join-path";
import {ActionKeys} from "../../guards/action-keys";
import {RoleKeys} from "../../guards/role-keys";

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

    let path: string = route.url ? joinPath(route.url) : route.url[0].path;

    if (path.includes(ActionKeys.Create) || path.includes(ActionKeys.Edit) || path.includes(ActionKeys.Delete))
      return this.authenticationService.isRole(RoleKeys.Propagator);
    return true
  }
}
