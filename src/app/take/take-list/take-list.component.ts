import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TakeService } from '../take-service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Take } from '../take-model';
@Component({
  selector: 'app-take-list',
  templateUrl: './take-list.component.html',
  styleUrls: ['./take-list.component.css']
})
export class TakeListComponent implements OnInit {
  pageSize = 5;
  page = 1;
  totalTakes = 0;
  takes: Take [] = []

  constructor(public router: Router, public takeService:TakeService){
  }

  detail(take: any): void {
    this.router.navigate(['take', take.id]);
  }

  ngOnInit(){
    this.takeService.getPage({ pageParams:  { size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Take>) => {
        this.takes = page.resources;
        console.log(page);
        this.totalTakes = page.totalElements;
      });
  }

  changePage(): void {
    this.takeService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Take>) => this.takes = page.resources);
  }

}
