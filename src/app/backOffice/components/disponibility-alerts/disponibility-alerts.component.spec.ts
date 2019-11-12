import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilityAlertsComponent } from './disponibility-alerts.component';

describe('DisponibilityAlertsComponent', () => {
  let component: DisponibilityAlertsComponent;
  let fixture: ComponentFixture<DisponibilityAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibilityAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilityAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
