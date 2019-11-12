import { TestBed } from '@angular/core/testing';

import { MangaDataService } from './manga-data.service';

describe('MangaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MangaDataService = TestBed.get(MangaDataService);
    expect(service).toBeTruthy();
  });
});
