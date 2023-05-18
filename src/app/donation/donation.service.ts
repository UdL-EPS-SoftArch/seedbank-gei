import { Injectable } from '@angular/core';
import { Donation } from './donation';
import { HateoasResourceOperation } from '@lagoshny/ngx-hateoas-client';
import {DonationInformation} from "./donation-list/donation-list.component";

@Injectable({
  providedIn: 'root'
})
export class DonationService extends HateoasResourceOperation<Donation> {

  private selectedDonation: DonationInformation;

  constructor() {
    super(Donation);
  }

  setCurrent(donation: DonationInformation) {
    console.log(donation);
    this.selectedDonation = donation;
  }

  getCurrent(): DonationInformation {
    return this.selectedDonation;
  }

}
