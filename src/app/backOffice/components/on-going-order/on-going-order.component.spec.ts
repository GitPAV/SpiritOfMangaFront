import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingOrderComponent } from './on-going-order.component';

describe('OnGoingOrderComponent', () => {
  let component: OnGoingOrderComponent;
  let fixture: ComponentFixture<OnGoingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnGoingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnGoingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
