import { AuthGuard } from './guards/auth.guards';
import { FavoriteAnimeComponent } from './anime/favorite-anime/favorite-anime.component';
import { ListAnimeComponent } from './anime/list-anime/list-anime.component';
import { LatestAnimeComponent } from './anime/latest-anime/latest-anime.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: LatestAnimeComponent },
  { path: 'lista', component: ListAnimeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorite', component: FavoriteAnimeComponent,  canActivate: [AuthGuard],canLoad: [AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
