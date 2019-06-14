import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMangaComponent } from './stock-manga.component';

describe('StockMangaComponent', () => {
  let component: StockMangaComponent;
  let fixture: ComponentFixture<StockMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
