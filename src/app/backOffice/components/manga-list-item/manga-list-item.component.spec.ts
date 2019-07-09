import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaListItemComponent } from './manga-list-item.component';

describe('MangaListItemComponent', () => {
  let component: MangaListItemComponent;
  let fixture: ComponentFixture<MangaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
