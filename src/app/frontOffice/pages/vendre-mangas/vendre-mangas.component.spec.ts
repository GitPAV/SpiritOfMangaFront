import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendreMangasComponent } from './vendre-mangas.component';

describe('VendreMangasComponent', () => {
  let component: VendreMangasComponent;
  let fixture: ComponentFixture<VendreMangasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendreMangasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendreMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
