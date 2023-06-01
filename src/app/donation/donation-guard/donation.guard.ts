import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let path: string = route.url ? this.joinPath(route.url) : route.url[0].path;
    console.log(path)
    return true
  }


  private joinPath(url: UrlSegment[]) {
    let finalPath: string = "";
    url.forEach((segment: UrlSegment) => {
      finalPath += segment.path + "/";
    });
    return finalPath.substring(0, finalPath.length - 1);
  }
}
