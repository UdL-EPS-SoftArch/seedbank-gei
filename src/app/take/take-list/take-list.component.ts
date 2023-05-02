import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TakeService } from '../take.service';
import { PagedGetOption, PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Take } from '../take-model';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
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

  constructor(public router: Router,
              public takeService: TakeService,
              private authenticationService: AuthenticationBasicService){
  }

  detail(take: Take): void {
    this.router.navigate(['take', take.id]);
  }

  ngOnInit(){
    let options: PagedGetOption = { pageParams:  { size: this.pageSize }, sort: { username: 'ASC' } };
    this.takeService.getPage(options).subscribe(
      (page: PagedResourceCollection<Take>) => {
        this.takes = page.resources;
        this.totalTakes = page.totalElements;
      });
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

  changePage(): void {
    let options: PagedGetOption = { pageParams: { page: this.page - 1, size: this.pageSize }, sort: { username: 'ASC' } };
    this.takeService.getPage(options).subscribe(
      (page: PagedResourceCollection<Take>) => this.takes = page.resources);
  }
}
