import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMangaBarComponent } from './search-manga-bar.component';

describe('SearchMangaBarComponent', () => {
  let component: SearchMangaBarComponent;
  let fixture: ComponentFixture<SearchMangaBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMangaBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMangaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
