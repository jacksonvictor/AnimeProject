import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAnimeComponent } from './favorite-anime.component';

describe('FavoriteAnimeComponent', () => {
  let component: FavoriteAnimeComponent;
  let fixture: ComponentFixture<FavoriteAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
