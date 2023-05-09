import {Component, OnInit} from '@angular/core';
import {
  HateoasResourceOperation,
  PagedGetOption,
  PagedResourceCollection,
  Resource
} from "@lagoshny/ngx-hateoas-client";
import {DonationService} from "../../donation.service";
import {firstValueFrom} from "rxjs";
import {Donor} from "../../donor";
import {Donation} from "../donation";
import {Propagator} from "../../propagator";
import {Take} from "../../take";
import {Router} from "@angular/router";

const pageSize: number = 5;

export interface DonationInformation {
  uri: string;
  donorName: string;
  propagatorName: string;
  amount: number;
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

  constructor(private router: Router, private donationService: DonationService) { }

  async ngOnInit(): Promise<void> {
    const options: PagedGetOption = {pageParams: {size: pageSize}, sort: {username: 'ASC'}};
    await this.donationService.getPage(options).subscribe(async (page) => {
      this.donations = await this.toDonationInformation(page);
      this.numberDonations = page.totalElements;
    });
  }

   async changePage(): Promise<void> {
    const options: PagedGetOption = { pageParams: { page: this.page - 1, size: pageSize }, sort: { username: 'ASC' } };
    await this.donationService.getPage(options).subscribe(async (page) =>
      this.donations = await this.toDonationInformation(page));
    }

    private toDonationInformation(collection: PagedResourceCollection<Donation>): Promise<DonationInformation[]> {
      return Promise.all(collection.resources.map(async (donation) => {
        const donor = (await firstValueFrom(donation.getRelation<Donor>("donor")));
        const takes = (await firstValueFrom(donation.getRelation<Take>("takenBy")));
        const propagator = (await firstValueFrom(takes.getRelation<Propagator>("takePropagator")));
        const uri = (donation as any).uri;
        return {
          uri: uri,
          donorName: donor.id,
          propagatorName: propagator.id,
          amount: donation.amount,
        }
      }));
    }

    private goToDonation(donation: DonationInformation): void {
      this.router.navigate([donation.uri]);
    }

}
