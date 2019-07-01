import { TestBed } from '@angular/core/testing';

import { SwitchFrontToBackService } from './switch-front-to-back.service';

describe('SwitchFrontToBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwitchFrontToBackService = TestBed.get(SwitchFrontToBackService);
    expect(service).toBeTruthy();
  });
});
