import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontOfficeWrapperComponent } from './front-office-wrapper.component';

describe('FrontOfficeWrapperComponent', () => {
  let component: FrontOfficeWrapperComponent;
  let fixture: ComponentFixture<FrontOfficeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontOfficeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontOfficeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
