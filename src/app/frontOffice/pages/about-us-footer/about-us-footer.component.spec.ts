import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFooterComponent } from './about-us-footer.component';

describe('AboutUsFooterComponent', () => {
  let component: AboutUsFooterComponent;
  let fixture: ComponentFixture<AboutUsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
