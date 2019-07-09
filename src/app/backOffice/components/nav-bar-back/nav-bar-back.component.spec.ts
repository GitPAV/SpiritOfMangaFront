import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBackComponent } from './nav-bar-back.component';

describe('NavBarBackComponent', () => {
  let component: NavBarBackComponent;
  let fixture: ComponentFixture<NavBarBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
