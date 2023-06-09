import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {
  PagedGetOption,
  PagedResourceCollection,
} from "@lagoshny/ngx-hateoas-client";
import {DonationService} from "../donation.service";
import {Donation} from "../donation";
import {Router} from "@angular/router";
import {getDonorFrom, getPropagatorFrom} from "../donation-resources";
import {Propagator} from "../../propagator";
import {Donor} from "../../donor";
import {Observable, of, OperatorFunction} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {ResourceCollection} from "@lagoshny/ngx-hateoas-client";
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-donation-search',
  templateUrl: './donation-search.component.html',
  styleUrls: ['./donation-search.component.scss']
})

export class DonationSearchComponent {
  @Output() emitResults: EventEmitter<Donation> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private donationService: DonationService,
              private authenticationService: AuthenticationBasicService) {
  }
  autocomplete: OperatorFunction<string, readonly Donation[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.donationService.findByLocation(term).pipe(
          map((collection: ResourceCollection<Donation>) => collection.resources),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false )
    )
  select(item: any): void {
    this.emitResults.emit(item as Donation);
  }
  isRole(role: string): boolean {
        return this.authenticationService.isRole(role);
      }
}
