import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguePacksComponent } from './catalogue-packs.component';

describe('CataloguePacksComponent', () => {
  let component: CataloguePacksComponent;
  let fixture: ComponentFixture<CataloguePacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataloguePacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataloguePacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
