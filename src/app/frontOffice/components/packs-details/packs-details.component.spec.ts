import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksDetailsComponent } from './packs-details.component';

describe('PacksDetailsComponent', () => {
  let component: PacksDetailsComponent;
  let fixture: ComponentFixture<PacksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacksDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
