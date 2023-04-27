import {Component, OnInit} from '@angular/core';
import {Request} from "../request";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../request.service";
import {Propagator} from "../../propagator";
import {Take} from "../../take";
import {switchMap} from "rxjs/operators";
import {RequestKeys} from "../request-keys";

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  public request: Request = new Request();

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
  ) {
  }
  ngOnInit(): void {
    const idKey = 'id';
    const propagatorKey = 'propagator';
    const fulfilledByKey = 'fulfilledBy';

    const id = this.route.snapshot.paramMap.get(idKey);
    this.requestService.getResource(id).pipe(
      switchMap((request: Request) => {
        this.request = request;
        return request.getRelation<Propagator>(propagatorKey);
      }),
      switchMap((propagator: Propagator) => {
        this.request.propagator = propagator;
        return this.request.getRelation<Take>(fulfilledByKey);
      })
    ).subscribe( (fulfilledBy: Take) => {
      this.request.fulfilledBy = fulfilledBy;
    })
  }
}
