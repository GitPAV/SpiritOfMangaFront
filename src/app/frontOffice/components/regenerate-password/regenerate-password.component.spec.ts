import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegeneratePasswordComponent } from './regenerate-password.component';

describe('RegeneratePasswordComponent', () => {
  let component: RegeneratePasswordComponent;
  let fixture: ComponentFixture<RegeneratePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegeneratePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegeneratePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
