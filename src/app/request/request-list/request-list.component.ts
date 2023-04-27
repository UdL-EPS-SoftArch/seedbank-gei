import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../request.service";
import {PagedGetOption, PagedResourceCollection, SortOrder} from "@lagoshny/ngx-hateoas-client";
import {switchMap} from "rxjs/operators";
import {Request} from "../request";
import {Propagator} from "../../propagator";
import {Take} from "../../take";
import {RequestKeys} from "../request-keys";

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  public requests: Request[] = []

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
  ) {
  }

  ngOnInit(): void {
    this.requestService.getPage(this.getPageOptions()).subscribe((page: PagedResourceCollection<Request>) => {
        this.requests = page.resources
        this.requests.map((request: Request) => {
          request.getRelation<Propagator>(RequestKeys.Propagator).pipe(
              switchMap((propagator: Propagator) => {
                request.propagator = propagator
                return request.getRelation<Take>(RequestKeys.FulfilledBy)
              }),
          ).subscribe((fulfilledBy: Take) => request.fulfilledBy = fulfilledBy)
          })
      }
    )
  }

  private getPageOptions(): PagedGetOption {
    const pageSize = 10
    const sortOrder: 'ASC' | 'DESC' = 'ASC'
    return {pageParams: {size: pageSize}, sort: {username: sortOrder}}
  }
}
