import { TestBed } from '@angular/core/testing';

import { RequestGuard } from './request.guard';

describe('DonationGuardGuard', () => {
  let guard: RequestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
