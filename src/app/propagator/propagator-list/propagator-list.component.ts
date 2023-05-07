import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Propagator} from '../propagator';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import {PropagatorService} from "../propagator.service";

@Component({
  selector: 'app-propagator-list',
  templateUrl: './propagator-list.component.html'
})
export class PropagatorListComponent implements OnInit {
  public propagators: Propagator[] = [];
  public pageSize = 5;
  public page = 1;
  public totalPropagators = 0;

  constructor(
    public router: Router,
    private propagatorService: PropagatorService) {
  }

  ngOnInit(): void {
    this.propagatorService.getPage({ pageParams:  { size: this.pageSize }, sort: { propagatorname: 'ASC' } }).subscribe(
        (page: PagedResourceCollection<Propagator>) => {
          this.propagators = page.resources;
          this.totalPropagators = page.totalElements;
        });
  }

  changePage(): void {
    this.propagatorService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { propagatorname: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Propagator>) => this.propagators = page.resources);
  }

  detail(propagator: Propagator): void {
    this.router.navigate(['propagators', propagator.id]);
  }
}

