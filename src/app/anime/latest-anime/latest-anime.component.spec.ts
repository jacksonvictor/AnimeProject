import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAnimeComponent } from './latest-anime.component';

describe('LatestAnimeComponent', () => {
  let component: LatestAnimeComponent;
  let fixture: ComponentFixture<LatestAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
