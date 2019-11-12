import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPackComponent } from './full-pack.component';

describe('FullPackComponent', () => {
  let component: FullPackComponent;
  let fixture: ComponentFixture<FullPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
