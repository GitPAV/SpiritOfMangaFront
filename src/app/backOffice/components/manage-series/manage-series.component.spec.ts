import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSeriesComponent } from './manage-series.component';

describe('ManageSeriesComponent', () => {
  let component: ManageSeriesComponent;
  let fixture: ComponentFixture<ManageSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
