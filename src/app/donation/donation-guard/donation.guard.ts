import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import {RoleKeys} from "../../guards/role-keys";
import {ActionKeys} from "../../guards/action-keys";
import {joinPath} from "../../guards/join-path";

@Injectable({
  providedIn: 'root'
})
export class DonationGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationBasicService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const LIST_PATH: string = "donations"
    const DETAIL_PATH: RegExp = /donations\/\d+/

    let path: string = route.url ? joinPath(route.url) : route.url[0].path;

    console.log(path)

    if (path.includes(ActionKeys.Create) || path.includes(ActionKeys.Edit) || path.includes(ActionKeys.Delete))
      return this.authenticationService.isRole(RoleKeys.Donor);
    return (path === LIST_PATH || DETAIL_PATH.test(path))
  }
}
