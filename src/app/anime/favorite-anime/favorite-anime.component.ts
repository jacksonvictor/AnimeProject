import { AnimeService } from './../anime.service';
import { AuthService } from './../../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Anime } from 'src/app/model/Anime';

@Component({
  selector: 'app-favorite-anime',
  templateUrl: './favorite-anime.component.html',
  styleUrls: ['./favorite-anime.component.scss']
})
export class FavoriteAnimeComponent implements OnInit {

  favorites$: Observable<Anime[]>
  favorites: Anime[]

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.favorites = this.animeService.getFavorites()
  }

  favorite(event: any){
    this.searchFavoriteById(event)
  }

 searchFavoriteById(id: string){
   for(let anime of this.favorites){
     if(anime.id === id){
      this.favorites.splice(this.favorites.indexOf(anime), 1)
     }
   }
 }
}
