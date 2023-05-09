import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DonationService} from '../donation.service';
import {Donation} from '../donation';
import {Donor} from '../../donor';
import {Take} from '../../take';
import {Propagator} from '../../propagator';
import {firstValueFrom} from 'rxjs';
import {donationIdParameter, donorResource, propagatorResource, takeResource} from "../donation-keys";

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
    this.id = this.route.snapshot.paramMap.get(donationIdParameter);
    this.donation = await firstValueFrom(this.donationService.getResource(this.id))
    this.donation.donor = await firstValueFrom(this.donation.getRelation<Donor>(donorResource))
    this.donation.takeBy = await firstValueFrom(this.donation.getRelation<Take>(takeResource))
    this.donation.takeBy.propagator = await firstValueFrom(this.donation.takeBy.getRelation<Propagator>(propagatorResource))
  }

}
