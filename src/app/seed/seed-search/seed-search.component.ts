import { Component, EventEmitter, Output } from '@angular/core';
import { SeedService } from '../seed.service';
import { Seed } from '../seed';
import { Observable, of, OperatorFunction } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { ResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-seed-search',
  templateUrl: './seed-search.component.html',
})
export class SeedSearchComponent {
  @Output() emitResults: EventEmitter<Seed> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private seedService: SeedService) {}

  autocomplete: OperatorFunction<string, readonly Seed[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        term.length < 3
          ? of([])
          : this.seedService.findByScientificName(term).pipe(
              map(
                (collection: ResourceCollection<Seed>) => collection.resources
              ),
              tap(() => (this.searchFailed = false)),
              catchError(() => {
                this.searchFailed = true;
                return of([]);
              })
            )
      ),
      tap(() => (this.searching = false))
    );

  select(item: any): void {
    this.emitResults.emit(item as Seed);
  }
}
