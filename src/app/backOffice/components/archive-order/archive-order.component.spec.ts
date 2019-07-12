import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveOrderComponent } from './archive-order.component';

describe('ArchiveOrderComponent', () => {
  let component: ArchiveOrderComponent;
  let fixture: ComponentFixture<ArchiveOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
