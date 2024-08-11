import { TestBed } from '@angular/core/testing';

import { KinService } from './kin.service';

describe('KinService', () => {
  let service: KinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
