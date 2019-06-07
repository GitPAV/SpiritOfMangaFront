import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMangaComponent } from './delete-manga.component';

describe('DeleteMangaComponent', () => {
  let component: DeleteMangaComponent;
  let fixture: ComponentFixture<DeleteMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
