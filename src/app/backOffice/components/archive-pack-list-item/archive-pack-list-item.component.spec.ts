import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePackListItemComponent } from './archive-pack-list-item.component';

describe('ArchivePackListItemComponent', () => {
  let component: ArchivePackListItemComponent;
  let fixture: ComponentFixture<ArchivePackListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivePackListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePackListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
