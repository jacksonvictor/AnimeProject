import { LatestAnimeComponent } from './latest-anime/latest-anime.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { ListAnimeComponent } from './list-anime/list-anime.component';
import { FavoriteAnimeComponent } from './favorite-anime/favorite-anime.component';


@NgModule({
  declarations: [
    AnimeCardComponent,
    LatestAnimeComponent,
    ListAnimeComponent,
    FavoriteAnimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class AnimeModule { }
