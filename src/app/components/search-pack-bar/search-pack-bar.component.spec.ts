import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPackBarComponent } from './search-pack-bar.component';

describe('SearchPackBarComponent', () => {
  let component: SearchPackBarComponent;
  let fixture: ComponentFixture<SearchPackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
