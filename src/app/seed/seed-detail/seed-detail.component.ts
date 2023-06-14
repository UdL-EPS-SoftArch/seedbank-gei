import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeedService } from '../seed.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { Seed } from '../seed';

@Component({
  selector: 'app-seed-detail',
  templateUrl: './seed-detail.component.html',
})
export class SeedDetailComponent {
  seedDetail: Seed;
  constructor(
    private route: ActivatedRoute,
    private seedService: SeedService,
    private authenticationService: AuthenticationBasicService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.seedService.getResource(id).subscribe((seed) => {
      this.seedDetail = seed;
      this.seedService.getBeneficialFor(id).subscribe((response) => {
        this.seedDetail.beneficialFor = response._embedded.seeds.map(
          (seed) => seed.scientificName
        );
      });
    });
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
