import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFooterComponent } from './front-footer.component';

describe('FrontFooterComponent', () => {
  let component: FrontFooterComponent;
  let fixture: ComponentFixture<FrontFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
