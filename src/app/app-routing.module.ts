import { CategoryAnimeComponent } from './anime/category-anime/category-anime.component';
import { LatestAnimeComponent } from './anime/latest-anime/latest-anime.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: LatestAnimeComponent },
  { path: 'lista', component: CategoryAnimeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
