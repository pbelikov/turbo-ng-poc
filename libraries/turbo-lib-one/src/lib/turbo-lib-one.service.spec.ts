import { TestBed } from '@angular/core/testing';

import { TurboLibOneService } from './turbo-lib-one.service';

describe('TurboLibOneService', () => {
  let service: TurboLibOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurboLibOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
