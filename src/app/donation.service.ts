import { Injectable } from '@angular/core';
import { Donation } from './donation/donation';
import { HateoasResourceOperation } from '@lagoshny/ngx-hateoas-client';

@Injectable({
  providedIn: 'root'
})
export class DonationService extends HateoasResourceOperation<Donation> {

  constructor() {
    super(Donation);
  }

}
