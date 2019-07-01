import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMangaComponent } from './gallery-manga.component';

describe('GalleryMangaComponent', () => {
  let component: GalleryMangaComponent;
  let fixture: ComponentFixture<GalleryMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
