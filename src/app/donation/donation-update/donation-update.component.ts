import { Component } from '@angular/core';
import {Donation} from "../donation";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import {DonationService} from "../donation.service";

@Component({
  selector: 'app-donation-update',
  templateUrl: './donation-update.component.html',
  styleUrls: ['./donation-update.component.scss']
})
export class DonationUpdateComponent {
  public donation: Donation;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationService: Location,
    private donationService: DonationService
  ) {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.donationService.getResource(id).subscribe(
      (donation: Donation) => this.donation = donation);
  }

  onSubmit(): void {
    this.donationService.patchResource(this.donation).subscribe(
      (modifiedDonation: Donation) => {
        const uri = (modifiedDonation as any).uri;
        this.router.navigate([uri]).then();
      });
  }

  onCancel(): void {
    this.locationService.back();
  }
}
