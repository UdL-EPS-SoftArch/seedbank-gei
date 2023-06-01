import {Component, OnInit} from '@angular/core';
import {Request} from "../request";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../request.service";
import {Propagator} from "../../propagator";
import {Take} from "../../take";
import {switchMap} from "rxjs/operators";
import {RequestKeys} from "../request-keys";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import { DonationService } from 'src/app/donation/donation.service';

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
    private authenticationService: AuthenticationBasicService,
    private donationService: DonationService,
  ) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get(RequestKeys.Id);
    this.requestService.getResource(id).pipe(
      switchMap((request: Request) => {
        this.request = request;
        return request.getRelation<Propagator>(RequestKeys.Propagator);
      }),
      switchMap((propagator: Propagator) => {
        this.request.propagator = propagator;
        return this.request.getRelation<Take>(RequestKeys.FulfilledBy);
      })
    ).subscribe( (fulfilledBy: Take) => {
      this.request.fulfilledBy = fulfilledBy;
    })
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }

  currentUserEdit(){
    return this.getCurrentUserName() == this.request.propagator.id;
  }

  createDonation(request: Request) {
    
  }
}
