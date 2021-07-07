import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimeModule } from './anime/anime.module';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AnimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
