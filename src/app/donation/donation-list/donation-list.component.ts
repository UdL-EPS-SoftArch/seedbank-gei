import {Component, OnInit} from '@angular/core';
import {PagedGetOption} from "@lagoshny/ngx-hateoas-client";
import {DonationService} from "../../donation.service";

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {

  donations = []
  numberDonations: number = 0;

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    const options: PagedGetOption = { pageParams: { size: 10 }, sort: { username: 'ASC' }};
    this.donationService.getPage(options).subscribe((page) => {
      this.donations = page.resources;
      this.numberDonations = page.totalElements;
      console.log(this.donations);
      console.log(this.numberDonations);
    });
  }

}
