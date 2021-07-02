import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeCardComponent } from './anime-card/anime-card.component';



@NgModule({
  declarations: [
    AnimeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AnimeCardComponent
  ]
})
export class AnimeModule { }
