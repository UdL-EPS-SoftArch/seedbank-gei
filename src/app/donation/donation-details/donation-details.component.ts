import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DonationService} from '../../donation.service';
import {Donation} from '../donation';
import {Donor} from '../../donor';
import {Take} from '../../take';
import {Propagator} from '../../propagator';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-donation',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.css']
})
export class DonationDetailsComponent implements OnInit {

  id: string | null = null;
  donation: Donation | null = null;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private donationService: DonationService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    this.donation = await firstValueFrom(this.donationService.getResource(this.id))
    this.donation.donor = await firstValueFrom(this.donation.getRelation<Donor>("donor"))
    this.donation.takeBy = await firstValueFrom(this.donation.getRelation<Take>("takenBy"))
    this.donation.takeBy.propagator = await firstValueFrom(this.donation.takeBy.getRelation<Propagator>("takePropagator"))
  }

}
