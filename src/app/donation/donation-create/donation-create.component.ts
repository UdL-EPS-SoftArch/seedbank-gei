import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Donation} from "../donation";
import {DonationService} from "../donation.service";
import {Location} from "@angular/common";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import {SeedService} from "../../seed/seed.service";
import {Seed} from "../../seed/seed";
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";

@Component({
  selector: 'app-donation-create',
  templateUrl: './donation-create.component.html',
  styleUrls: ['./donation-create.component.scss']
})
export class DonationCreateComponent implements OnInit {
  public donation: Donation;
  public seeds: Seed[] = [];
  public selectedSeed: String | undefined = undefined;

  constructor(
    private router: Router,
    private locationService: Location,
    private donationService: DonationService,
    private seedService: SeedService,
    private authenticationBasicService: AuthenticationBasicService,
  ) {
  }

  ngOnInit(): void {
    this.donation = new Donation();
    this.loadSeedList();
  }

  onSubmit(): void {
    this.donation.donor = this.authenticationBasicService.getCurrentUser();
    const selectedSeedId = +this.selectedSeed
    if (this.selectedSeed === undefined) {
      this.createDonation();
    } else {
      this.seedService.getResource(selectedSeedId).subscribe((seed: Seed) => {
        this.donation.of = seed;
        this.createDonation();
      });
    }
  }

  createDonation(): void {
    this.donationService.createResource({body: this.donation}).subscribe((donation: Donation) => {
      const uri = (donation as any).uri;
      this.router.navigate([uri]).then();
    });
  }

  loadSeedList() {
    this.seedService.getPage({
      sort: {scientificName: 'ASC'},
    }).subscribe((seeds: PagedResourceCollection<Seed>) => {
      this.seeds = seeds.resources
    })
  }


  onCancel(): void {
    this.locationService.back();
  }
}
