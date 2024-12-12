import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardiãoGuard } from './guardião.guard';

describe('guardiãoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardiãoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
