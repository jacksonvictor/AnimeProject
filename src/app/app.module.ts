import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimeModule } from './anime/anime.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
