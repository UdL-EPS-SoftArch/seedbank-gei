import { Component, OnInit } from '@angular/core';
import { Seed } from '../seed';
import { ActivatedRoute, Router } from '@angular/router';
import { SeedService } from '../seed.service';

@Component({
  selector: 'app-seed-update',
  templateUrl: './seed-update.component.html',
  styleUrls: ['./seed-update.component.scss'],
})
export class SeedUpdateComponent {
  public seed: Seed = new Seed();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seedService: SeedService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.seedService
      .getResource(id)
      .subscribe((seed: Seed) => (this.seed = seed));
  }

  onSubmit(): void {
    this.seedService.patchResource(this.seed).subscribe((patchedSeed: Seed) => {
      this.router.navigate(['seed', patchedSeed.id]);
    });
  }
}
