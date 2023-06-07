import { Component } from '@angular/core';
import {TakeService} from "../take.service";
import {Router} from "@angular/router";
import { Take } from '../take-model';
import {DonationService} from "../../donation/donation.service";
import {DonationInformation} from "../../donation/donation-list/donation-list.component";

@Component({
  selector: 'app-create-take',
  templateUrl: './create-take.component.html',
  styleUrls: ['./create-take.component.css']
})
export class CreateTakeComponent {
  take = new Take();
  currentDonation: DonationInformation;

  constructor(private takeService: TakeService, private router: Router, private donationService: DonationService) {
    console.log(this.take);
    this.currentDonation = donationService.getCurrent();
    if (this.currentDonation) {
      console.log(this.currentDonation);
      this.take.amount = this.currentDonation.amount;
      this.take.weight = this.currentDonation.weight;
      this.take.location = this.currentDonation.location;
    }
  }

  onSubmit() {
    this.takeService.createResource({ body: this.take }).subscribe(
      () => {
        this.router.navigate(['/take']);
      }
    );
  }
}
