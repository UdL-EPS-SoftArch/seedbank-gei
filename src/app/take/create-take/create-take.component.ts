import { Component } from '@angular/core';
import {TakeService} from "../take.service";
import {Router} from "@angular/router";
import { Take } from '../take-model';
import {DonationService} from "../../donation/donation.service";

@Component({
  selector: 'app-create-take',
  templateUrl: './create-take.component.html',
  styleUrls: ['./create-take.component.css']
})
export class CreateTakeComponent {
  take = new Take();

  constructor(private takeService: TakeService, private router: Router, private donationService: DonationService) {
    console.log(this.take);
    console.log(this.donationService.getCurrent())
  }

  onSubmit() {
    this.takeService.createResource({ body: this.take }).subscribe(
      () => {
        this.router.navigate(['/take']);
      }
    );
  }
}
