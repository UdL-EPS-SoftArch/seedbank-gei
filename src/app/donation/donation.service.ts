import { Injectable } from '@angular/core';
import { Donation } from './donation';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
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

  public findByLocation(query: string): Observable<ResourceCollection<Donation>> {
      return this.searchCollection('findByLocation', { params: { text: query } });
    }
}
