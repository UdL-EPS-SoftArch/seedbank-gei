import { TestBed } from '@angular/core/testing';

import { TakeGuard } from './take.guard';

describe('TakeGuard', () => {
  let guard: TakeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TakeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
