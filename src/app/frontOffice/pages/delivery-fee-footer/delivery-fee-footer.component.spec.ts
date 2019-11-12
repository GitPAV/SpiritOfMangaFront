import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFeeFooterComponent } from './delivery-fee-footer.component';

describe('DeliveryFeeFooterComponent', () => {
  let component: DeliveryFeeFooterComponent;
  let fixture: ComponentFixture<DeliveryFeeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryFeeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFeeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
