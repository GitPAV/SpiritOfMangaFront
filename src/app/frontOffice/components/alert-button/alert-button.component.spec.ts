import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
