import { TestBed } from '@angular/core/testing';

import { TurboLibTwoService } from './turbo-lib-two.service';

describe('TurboLibTwoService', () => {
  let service: TurboLibTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurboLibTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
