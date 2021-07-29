import { TestBed } from '@angular/core/testing';

import { PelayanApiServiceService } from './pelayan-api-service.service';

describe('PelayanApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PelayanApiServiceService = TestBed.get(PelayanApiServiceService);
    expect(service).toBeTruthy();
  });
});
