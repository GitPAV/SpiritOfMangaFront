import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePacksComponent } from './update-packs.component';

describe('UpdatePacksComponent', () => {
  let component: UpdatePacksComponent;
  let fixture: ComponentFixture<UpdatePacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
