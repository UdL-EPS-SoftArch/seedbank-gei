import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Donation} from "../donation";
import {DonationService} from "../donation.service";
import {Location} from "@angular/common";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-donation-create',
  templateUrl: './donation-create.component.html',
  styleUrls: ['./donation-create.component.scss']
})
export class DonationCreateComponent implements OnInit {
  public donation: Donation;

  constructor(
    private router: Router,
    private locationService: Location,
    private donationService: DonationService,
    private authenticationBasicService: AuthenticationBasicService,
  ) {
  }

  ngOnInit(): void {
    this.donation = new Donation();
  }

  onSubmit(): void {
    this.donation.donor = this.authenticationBasicService.getCurrentUser();
    this.donationService.createResource({body: this.donation}).subscribe((donation: Donation) => {
      const uri = (donation as any).uri;
      this.router.navigate([uri]).then();
    });
  }

  onCancel(): void {
    this.locationService.back();
  }
}
