import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesComponent } from './create-modify-serie.component';

describe('SeriesPageComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
