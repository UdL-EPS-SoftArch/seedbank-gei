import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Donation} from "../donation";
import {DonationService} from "../../donation.service";

@Component({
  selector: 'app-donation-delete',
  templateUrl: './donation-delete.component.html',
  styleUrls: ['./donation-delete.component.scss']
})
export class DonationDeleteComponent {
  public donation: Donation

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private donationService: DonationService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.donationService.getResource(id).subscribe((donation: Donation) => {
      this.donation = donation;
    });
  }

  delete() {
    this.donationService.deleteResource(this.donation).subscribe(() => {
      this.router.navigate(['/donations']).then();
    });
  }

}
