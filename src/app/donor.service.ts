import { Injectable } from '@angular/core';
import {HateoasResourceOperation, ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {User} from "./login-basic/user";
import {Donor} from "./donor";
import {Observable} from "rxjs/internal/Observable";

@Injectable({providedIn: 'root'})
export class DonorService extends HateoasResourceOperation<User> {

  constructor() {
    super(Donor);
  }
}
