import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Propagator } from '../login-basic/propagator';

@Injectable({providedIn: 'root'})
export class PropagatorService extends HateoasResourceOperation<User> {

  constructor() {
    super(Propagator);
  }

  public findByPropagatornameContaining(query: string): Observable<ResourceCollection<Propagator>> {
    return this.searchCollection('findByPropagatornameContaining', { params: { text: query } });
  }
}
