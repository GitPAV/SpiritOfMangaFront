import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMangaComponent } from './create-manga.component';

describe('CreateMangaComponent', () => {
  let component: CreateMangaComponent;
  let fixture: ComponentFixture<CreateMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
