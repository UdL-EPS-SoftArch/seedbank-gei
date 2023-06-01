import { Injectable } from '@angular/core';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import {Donor} from "./donor";
import {Observable} from "rxjs/internal/Observable";
import {User} from "./login-basic/user";

@Injectable({providedIn: 'root'})
export class DonorService extends HateoasResourceOperation<User> {

  constructor() {
    super(Donor);
  }
  public findByUsernameContaining(query: string): Observable<ResourceCollection<Donor>> {
    return this.searchCollection('findByUsernameContaining', { params: { text: query } });
  }
}
