import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeedService } from '../seed.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Seed } from '../seed';

@Component({
  selector: 'app-seed-list',
  templateUrl: './seed-list.component.html',
})
export class SeedListComponent {
  public seeds: Seed[] = [];
  public pageSize = 5;
  public page = 1;
  public totalSeeds = 0;

  constructor(public router: Router, private seedService: SeedService) {}

  ngOnInit(): void {
    this.seedService
      .getPage({
        pageParams: { size: this.pageSize },
        sort: { scientificName: 'ASC' },
      })
      .subscribe((page: PagedResourceCollection<Seed>) => {
        console.log(page.resources);
        this.seeds = page.resources;
        console.log(this.seeds);
        this.totalSeeds = page.totalElements;
      });
  }

  changePage(): void {
    this.seedService
      .getPage({
        pageParams: { page: this.page - 1, size: this.pageSize },
        sort: { scientificName: 'ASC' },
      })
      .subscribe(
        (page: PagedResourceCollection<Seed>) => (this.seeds = page.resources)
      );
  }
}
