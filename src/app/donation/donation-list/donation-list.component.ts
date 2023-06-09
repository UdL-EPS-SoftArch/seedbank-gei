import {Component, OnInit} from '@angular/core';
import {
  PagedGetOption,
  PagedResourceCollection,
} from "@lagoshny/ngx-hateoas-client";
import {DonationService} from "../donation.service";
import {Donation} from "../donation";
import {Router} from "@angular/router";
import {getDonorFrom, getPropagatorFrom} from "../donation-resources";
import {Propagator} from "../../propagator";
import {Donor} from "../../donor";

const pageSize: number = 5;

export interface DonationInformation {
  uri: string;
  donorName: string;
  propagatorName: string | undefined | null;
  amount: number;
  weight: number;
  location: string;
}

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})

export class DonationListComponent implements OnInit {

  protected readonly pageSize = pageSize;
  donations: DonationInformation[] = []
  numberDonations: number = 0;
  page: number = 1;

  constructor(private router: Router, private donationService: DonationService) {
  }

  async ngOnInit(): Promise<void> {
    const options: PagedGetOption = {pageParams: {size: pageSize}, sort: {username: 'ASC'}};
    await this.donationService.getPage(options).subscribe(async (page) => {
      this.donations = await this.toDonationInformation(page);
      this.numberDonations = page.totalElements;
    });
  }

  async changePage(): Promise<void> {
    const options: PagedGetOption = {pageParams: {page: this.page - 1, size: pageSize}, sort: {username: 'ASC'}};
    await this.donationService.getPage(options).subscribe(async (page) =>
      this.donations = await this.toDonationInformation(page));
  }

  private toDonationInformation(collection: PagedResourceCollection<Donation>): Promise<DonationInformation[]> {
    return Promise.all(collection.resources.map(async (donation) => {
      const donor: Donor = await getDonorFrom(donation);
      const propagator : Propagator | null = await getPropagatorFrom(donation);
      const uri = (donation as any).uri;
      return {
        uri: uri,
        donorName: donor.id,
        propagatorName: propagator?.id,
        amount: donation.amount,
        weight: donation.weight,
        location: donation.location,
      }
    }));
  }

  goToDonation(donation: DonationInformation): void {
    this.setCurrentDonation(donation);
    this.router.navigate([donation.uri]).then();
  }

  setCurrentDonation(donation: DonationInformation) {
    this.donationService.setCurrent(donation);
  }

}
