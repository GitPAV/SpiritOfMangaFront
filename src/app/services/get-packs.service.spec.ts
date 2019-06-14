import { TestBed } from '@angular/core/testing';

import { GetPacksService } from './get-packs.service';

describe('GetPacksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPacksService = TestBed.get(GetPacksService);
    expect(service).toBeTruthy();
  });
});
