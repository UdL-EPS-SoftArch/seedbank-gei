import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Take } from './take-model'; 

@Injectable({providedIn: 'root'})
export class TakeService extends HateoasResourceOperation<Take> {

  constructor() {
    super(Take);
  }

//   public findByUsernameContaining(query: string): Observable<ResourceCollection<Take>> {
//     return this.searchCollection('findByUsernameContaining', { params: { text: query } });
//   }
}
