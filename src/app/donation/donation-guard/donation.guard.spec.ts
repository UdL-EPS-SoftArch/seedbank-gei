import { TestBed } from '@angular/core/testing';

import { DonationGuard } from './donation.guard';

describe('DonationGuardGuard', () => {
  let guard: DonationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DonationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
