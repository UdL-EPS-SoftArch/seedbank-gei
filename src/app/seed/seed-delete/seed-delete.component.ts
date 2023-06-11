import { Component, OnInit } from '@angular/core';
import { SeedService } from '../seed.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Seed } from '../seed';

@Component({
  selector: 'app-seed-delete',
  templateUrl: './seed-delete.component.html',
  styleUrls: ['./seed-delete.component.css'],
})
export class SeedDeleteComponent implements OnInit {
  idSeed: string;
  seed: Seed;
  constructor(
    private router: Router,
    private seedService: SeedService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.idSeed = this.route.snapshot.paramMap.get('id');
  }
  delete() {
    this.seedService.getResource(this.idSeed).subscribe((seed: Seed) => {
      this.seed = seed;
      this.seed.beneficialFor = [];
      this.seedService
        .patchResource(this.seed)
        .subscribe((patchedSeed: Seed) => {
          console.log(patchedSeed);
          this.seedService.deleteResourceById(patchedSeed.id).subscribe({
            next: (e) => {
              console.log(e);
              this.router.navigateByUrl('/seeds');
            },
            error: (err) => {
              console.log(err);
            },
          });
        });
    });
  }
}
