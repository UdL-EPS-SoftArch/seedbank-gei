import { Injectable } from '@angular/core';
import { Seed } from './seed';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/* import { Observable } from 'rxjs/internal/Observable'; */
import {
  HateoasResourceOperation,
  ResourceCollection,
} from '@lagoshny/ngx-hateoas-client';

@Injectable({
  providedIn: 'root',
})
export class SeedService extends HateoasResourceOperation<Seed> {
  constructor(private http: HttpClient) {
    super(Seed);
  }

  getBeneficialFor(seedId: string): Observable<any> {
    const url = `http://localhost:8080/seeds/${seedId}/beneficialFor`;
    return this.http.get(url);
  }

  public findByScientificName(
    query: string
  ): Observable<ResourceCollection<Seed>> {
    return this.searchCollection('findByScientificNameContaining', {
      params: { text: query },
    });
  }
}
