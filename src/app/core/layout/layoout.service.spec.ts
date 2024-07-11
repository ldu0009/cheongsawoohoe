import { TestBed } from '@angular/core/testing';

import { LayooutService } from './layoout.service';

describe('LayooutService', () => {
  let service: LayooutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayooutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
