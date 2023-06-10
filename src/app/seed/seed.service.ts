import { Injectable } from '@angular/core';
import { Seed } from './seed';
import { Observable } from 'rxjs/internal/Observable';
import {
  HateoasResourceOperation,
  ResourceCollection,
} from '@lagoshny/ngx-hateoas-client';

@Injectable({
  providedIn: 'root',
})
export class SeedService extends HateoasResourceOperation<Seed> {
  constructor() {
    super(Seed);
  }

  public findByScientificName(
    query: string
  ): Observable<ResourceCollection<Seed>> {
    return this.searchCollection('findByScientificNameContaining', {
      params: { text: query },
    });
  }
}
