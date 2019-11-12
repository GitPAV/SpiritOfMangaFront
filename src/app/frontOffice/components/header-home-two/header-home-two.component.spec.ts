import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHomeTwoComponent } from './header-home-two.component';

describe('HeaderHomeTwoComponent', () => {
  let component: HeaderHomeTwoComponent;
  let fixture: ComponentFixture<HeaderHomeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHomeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHomeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
