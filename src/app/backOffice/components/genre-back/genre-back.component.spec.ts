import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBackComponent } from './genre-back.component';

describe('GenreBackComponent', () => {
  let component: GenreBackComponent;
  let fixture: ComponentFixture<GenreBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
