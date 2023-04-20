import {Component, EventEmitter, Output} from '@angular/core';
import { Propagator } from '../login-basic/propagator';
import {PropagatorService} from "../propagator.service";
import {Observable, of, OperatorFunction} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {ResourceCollection} from "@lagoshny/ngx-hateoas-client";


@Component({
  selector: 'app-propagator-search',
  templateUrl: './propagator-search.component.html',
  styleUrls: ['./propagator-search.component.css']
})
export class PropagatorSearchComponent {
  @Output() emitResults: EventEmitter<Propagator> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private propagatorService: PropagatorService) {
  }
  autocomplete: OperatorFunction<string, readonly Propagator[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.propagatorService.findByUsernameContaining(term).pipe(
          map((collection: ResourceCollection<Propagator>) => collection.resources),
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
    this.emitResults.emit(item as Propagator);
  }
}
