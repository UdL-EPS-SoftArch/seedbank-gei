import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Donation} from "../donation";
import {DonationService} from "../donation.service";
import {donationIdParameter, donationsResource} from "../donation-keys";

@Component({
  selector: 'app-donation-delete',
  templateUrl: './donation-delete.component.html',
  styleUrls: ['./donation-delete.component.scss']
})
export class DonationDeleteComponent implements OnInit {
  public donation: Donation
  id: string

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private donationService: DonationService,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get(donationIdParameter);
    this.donationService.getResource(this.id).subscribe((donation: Donation) => {
      this.donation = donation;
    });
  }

  delete() {
    this.donationService.deleteResource(this.donation).subscribe(() => {
      this.router.navigate(['/' + donationsResource]).then();
    });
  }

}
