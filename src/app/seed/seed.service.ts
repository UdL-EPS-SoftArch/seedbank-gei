import { Injectable } from '@angular/core';
import { Seed } from './seed';
import { HateoasResourceOperation } from '@lagoshny/ngx-hateoas-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
