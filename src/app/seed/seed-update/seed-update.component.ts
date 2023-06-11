import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed';
import { ActivatedRoute, Router } from '@angular/router';
import { SeedService } from '../seed.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-seed-update',
  templateUrl: './seed-update.component.html',
  styleUrls: ['./seed-update.component.css'],
})
export class SeedUpdateComponent {
  public seed: Seed = new Seed();
  public commonNameInput: string = '';
  public commonNamesList: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seedService: SeedService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.seedService.getResource(id).subscribe((seed: Seed) => {
      this.seed = seed;
      this.commonNamesList = this.seed.commonName;
    });
  }

  addCommonName(commonNameInput: string) {
    this.commonNamesList.push(commonNameInput);
    this.commonNameInput = '';
  }

  removeCommonName(index: number) {
    this.commonNamesList.splice(index, 1);
  }

  onSubmit(): void {
    this.seed.commonName = this.commonNamesList;
    this.seed.beneficialFor = [];
    this.seedService.patchResource(this.seed).subscribe((patchedSeed: Seed) => {
      this.router.navigate(['seeds', patchedSeed.id]);
    });
  }
}
