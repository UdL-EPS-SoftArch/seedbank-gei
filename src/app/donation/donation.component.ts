import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from '../donation.service';
import { Donation } from './donation';
import { Donor } from '../donor';
import { Take } from '../take';
import { Propagator } from '../propagator';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  id: string | null = null;
  donation: Donation | null = null;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private donationService: DonationService
    ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.donationService.getResource(this.id).subscribe(donation => {
      console.log(donation);
      this.donation = donation;
      this.donation.getRelation<Donor>("donor").subscribe(donor => {
        console.log(`Donor: ${JSON.stringify(donor)}`);
      });
      this.donation.getRelation<Take>("takenBy").subscribe(takenBy => {
        console.log(`TakenBy: ${JSON.stringify(takenBy)}`);
        takenBy.getRelation<Propagator>("takePropagator").subscribe(propagator => {
          console.log(`Propagator: ${JSON.stringify(propagator)}`);
        })
      })
    });
  }

}
