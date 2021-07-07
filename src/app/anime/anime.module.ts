import { LatestAnimeComponent } from './latest-anime/latest-anime.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { CategoryAnimeComponent } from './category-anime/category-anime.component';


@NgModule({
  declarations: [
    AnimeCardComponent,
    LatestAnimeComponent,
    CategoryAnimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AnimeCardComponent,
    LatestAnimeComponent
  ]
})
export class AnimeModule { }
