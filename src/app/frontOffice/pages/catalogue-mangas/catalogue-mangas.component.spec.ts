import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueMangasComponent } from './catalogue-mangas.component';

describe('CatalogueMangasComponent', () => {
  let component: CatalogueMangasComponent;
  let fixture: ComponentFixture<CatalogueMangasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueMangasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
