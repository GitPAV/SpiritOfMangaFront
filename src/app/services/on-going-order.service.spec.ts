import { TestBed } from '@angular/core/testing';

import { OnGoingOrderService } from './on-going-order.service';

describe('OnGoingOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnGoingOrderService = TestBed.get(OnGoingOrderService);
    expect(service).toBeTruthy();
  });
});
