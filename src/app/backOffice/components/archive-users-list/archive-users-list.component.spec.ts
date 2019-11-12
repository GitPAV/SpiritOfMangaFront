import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveUsersListComponent } from './archive-users-list.component';

describe('ArchiveUsersListComponent', () => {
  let component: ArchiveUsersListComponent;
  let fixture: ComponentFixture<ArchiveUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
