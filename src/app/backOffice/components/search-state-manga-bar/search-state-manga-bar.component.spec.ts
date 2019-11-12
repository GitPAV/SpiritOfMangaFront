import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStateMangaBarComponent } from './search-state-manga-bar.component';

describe('SearchStateMangaBarComponent', () => {
  let component: SearchStateMangaBarComponent;
  let fixture: ComponentFixture<SearchStateMangaBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStateMangaBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStateMangaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
