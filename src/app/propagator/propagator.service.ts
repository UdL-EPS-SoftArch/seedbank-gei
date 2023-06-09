import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Propagator } from './propagator';
import {User} from "../login-basic/user";

@Injectable({providedIn: 'root'})
export class PropagatorService extends HateoasResourceOperation<Propagator> {

  constructor() {
    super(Propagator);
  }

  public findByUsernameContaining(query: string): Observable<ResourceCollection<Propagator>> {
    return this.searchCollection('findByUsernameContaining', { params: { text: query } });
  }
}
