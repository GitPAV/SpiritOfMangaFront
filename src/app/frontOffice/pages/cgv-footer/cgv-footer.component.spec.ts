import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGVFooterComponent } from './cgv-footer.component';

describe('CGVFooterComponent', () => {
  let component: CGVFooterComponent;
  let fixture: ComponentFixture<CGVFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGVFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGVFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
