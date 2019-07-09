import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMangaPageComponent } from './gallery-manga-page.component';

describe('GalleryMangaPageComponent', () => {
  let component: GalleryMangaPageComponent;
  let fixture: ComponentFixture<GalleryMangaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMangaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMangaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
