import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOpinionFooterComponent } from './user-opinion-footer.component';

describe('UserOpinionFooterComponent', () => {
  let component: UserOpinionFooterComponent;
  let fixture: ComponentFixture<UserOpinionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOpinionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOpinionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
