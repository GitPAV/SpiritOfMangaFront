import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPackComponent } from './gallery-pack.component';

describe('GalleryPackComponent', () => {
  let component: GalleryPackComponent;
  let fixture: ComponentFixture<GalleryPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
