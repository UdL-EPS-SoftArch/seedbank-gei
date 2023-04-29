import { Injectable } from '@angular/core';
import { HateoasResourceOperation } from '@lagoshny/ngx-hateoas-client';
import { Take } from './take-model';

@Injectable({providedIn: 'root'})
export class TakeService extends HateoasResourceOperation<Take> {

  constructor() {
    super(Take);
  }
}
