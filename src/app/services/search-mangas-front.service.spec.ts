import { TestBed } from '@angular/core/testing';

import { SearchMangasFrontService } from './search-mangas-front.service';

describe('SearchMangasFrontService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchMangasFrontService = TestBed.get(SearchMangasFrontService);
    expect(service).toBeTruthy();
  });
});
