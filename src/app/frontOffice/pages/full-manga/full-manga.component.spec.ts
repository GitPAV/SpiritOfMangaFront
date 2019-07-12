import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMangaComponent } from './full-manga.component';

describe('FullMangaComponent', () => {
  let component: FullMangaComponent;
  let fixture: ComponentFixture<FullMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
