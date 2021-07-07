import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAnimeComponent } from './category-anime.component';

describe('CategoryAnimeComponent', () => {
  let component: CategoryAnimeComponent;
  let fixture: ComponentFixture<CategoryAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
