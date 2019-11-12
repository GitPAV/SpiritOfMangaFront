import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveMangaListItemComponent } from './archive-manga-list-item.component';

describe('ArchiveMangaListItemComponent', () => {
  let component: ArchiveMangaListItemComponent;
  let fixture: ComponentFixture<ArchiveMangaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMangaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMangaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
