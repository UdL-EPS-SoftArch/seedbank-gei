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
  public sortBy = 'Scientific name';
  public sortOrder = 'A-Z';

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

        this.sortSeeds();
      });
  }

  searchSeeds(seed: Seed): void {
    this.router.navigate(['seeds', seed.id]);
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

  updateSelection(selection: string): void {
    this.sortBy = selection;
    this.sortSeeds();
  }

  updateSortOrder(order: string): void {
    this.sortOrder = order;
    this.sortSeeds();
  }

  sortSeeds(): void {
    if (this.sortBy === 'Common name') {
      this.seeds.sort((a, b) => {
        const commonNamesA = a.commonName.join().toUpperCase();
        const commonNamesB = b.commonName.join().toUpperCase();

        if (commonNamesA === '' && commonNamesB === '') {
          return 0;
        }
        if (commonNamesA === '') {
          return 1;
        }
        if (commonNamesB === '') {
          return -1;
        }

        if (
          (commonNamesA < commonNamesB && this.sortOrder === 'A-Z') ||
          (commonNamesA > commonNamesB && this.sortOrder === 'Z-A')
        ) {
          return -1;
        }
        if (
          (commonNamesA > commonNamesB && this.sortOrder === 'A-Z') ||
          (commonNamesA < commonNamesB && this.sortOrder === 'Z-A')
        ) {
          return 1;
        }
        return 0;
      });
    } else if (this.sortBy === 'Scientific name') {
      this.seeds.sort((a, b) => {
        const scientificNameA = a.scientificName.toUpperCase();
        const scientificNameB = b.scientificName.toUpperCase();

        if (
          (scientificNameA < scientificNameB && this.sortOrder === 'A-Z') ||
          (scientificNameA > scientificNameB && this.sortOrder === 'Z-A')
        ) {
          return -1;
        }
        if (
          (scientificNameA > scientificNameB && this.sortOrder === 'A-Z') ||
          (scientificNameA < scientificNameB && this.sortOrder === 'Z-A')
        ) {
          return 1;
        }
        return 0;
      });
    }
  }
}
