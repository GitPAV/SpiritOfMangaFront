import { TestBed } from '@angular/core/testing';

import { ArchiveOrderService } from './archive-order.service';

describe('ArchiveOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchiveOrderService = TestBed.get(ArchiveOrderService);
    expect(service).toBeTruthy();
  });
});
