import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeedService } from '../seed.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Seed } from '../seed';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';

@Component({
  selector: 'app-seed-list',
  templateUrl: './seed-list.component.html',
  styleUrls: ['./seed-list.component.css'],
})
export class SeedListComponent {
  public seeds: Seed[] = [];
  public pageSize = 5;
  public page = 1;
  public totalSeeds = 0;

  constructor(
    public router: Router,
    private seedService: SeedService,
    private authenticationService: AuthenticationBasicService
  ) {}

  ngOnInit(): void {
    this.seedService
      .getPage({
        pageParams: { size: this.pageSize },
        sort: { scientificName: 'ASC' },
      })
      .subscribe((page: PagedResourceCollection<Seed>) => {
        this.seeds = page.resources;
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

  detail(seed: Seed): void {
    this.router.navigate(['seeds', seed.id]);
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
