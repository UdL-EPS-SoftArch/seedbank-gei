import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DonationService} from '../donation.service';
import {Donation} from '../donation';
import {firstValueFrom} from 'rxjs';
import {donationIdParameter} from "../donation-keys";
import {loadResourcesRecursivelyFor} from "../donation-resources";

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
    await loadResourcesRecursivelyFor(this.donation);
  }

}
