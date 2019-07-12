import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderButtonComponent } from './order-button.component';

describe('OrderButtonComponent', () => {
  let component: OrderButtonComponent;
  let fixture: ComponentFixture<OrderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
