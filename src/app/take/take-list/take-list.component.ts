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
  public pageSize = 5;
  public page = 1;
  public totalTakes = 0;
  takes:any[]=[]
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
}