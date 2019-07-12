import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPackComponent } from './card-pack.component';

describe('CardPackComponent', () => {
  let component: CardPackComponent;
  let fixture: ComponentFixture<CardPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
