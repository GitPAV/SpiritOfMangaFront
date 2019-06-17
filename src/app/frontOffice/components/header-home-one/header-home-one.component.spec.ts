import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHomeOneComponent } from './header-home-one.component';

describe('HeaderHomeOneComponent', () => {
  let component: HeaderHomeOneComponent;
  let fixture: ComponentFixture<HeaderHomeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHomeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHomeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
