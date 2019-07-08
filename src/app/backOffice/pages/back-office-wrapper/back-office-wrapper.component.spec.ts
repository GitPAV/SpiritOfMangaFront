import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeWrapperComponent } from './back-office-wrapper.component';

describe('BackOfficeWrapperComponent', () => {
  let component: BackOfficeWrapperComponent;
  let fixture: ComponentFixture<BackOfficeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackOfficeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
