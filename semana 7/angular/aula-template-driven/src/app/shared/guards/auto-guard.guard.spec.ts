import { TestBed } from '@angular/core/testing';

import { AutoGuardGuard } from './auto-guard.guard';

describe('AutoGuardGuard', () => {
  let guard: AutoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
