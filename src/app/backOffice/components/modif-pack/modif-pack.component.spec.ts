import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPackComponent } from './modif-pack.component';

describe('ModifPackComponent', () => {
  let component: ModifPackComponent;
  let fixture: ComponentFixture<ModifPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
