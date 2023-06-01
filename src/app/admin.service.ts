import { Injectable } from '@angular/core';
import {HateoasResourceOperation, ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {User} from "./login-basic/user";
import {Admin} from "./admin";
import {Observable} from "rxjs/internal/Observable";

@Injectable({providedIn: 'root'})
export class AdminService extends HateoasResourceOperation<User> {

  constructor() {
    super(Admin);
  }
  public findByUsernameContaining(query: string): Observable<ResourceCollection<Admin>> {
    return this.searchCollection('findByUsernameContaining', { params: { text: query } });
  }
}
