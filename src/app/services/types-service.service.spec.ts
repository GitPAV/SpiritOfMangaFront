import { TestBed } from '@angular/core/testing';

import { TypesServiceService } from './types-service.service';

describe('TypesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypesServiceService = TestBed.get(TypesServiceService);
    expect(service).toBeTruthy();
  });
});
