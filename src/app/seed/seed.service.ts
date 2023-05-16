import { Injectable } from '@angular/core';
import { Seed } from './seed';
import { HateoasResourceOperation } from '@lagoshny/ngx-hateoas-client';

@Injectable({
  providedIn: 'root',
})
export class SeedService extends HateoasResourceOperation<Seed> {
  constructor() {
    super(Seed);
  }
}
