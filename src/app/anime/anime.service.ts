import { Episodio } from './../model/Episode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { Anime } from '../model/Anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private readonly API_BASE_URL = "https://appanimeplus.tk/meuanimetv-40.php"

  constructor(private http: HttpClient) {   }

  searchAnime(anime:string){
    return this.http.get<Anime[]>(`${this.API_BASE_URL}?search=${anime}`).pipe(tap(console.log))
  }

  getLatestAnimes(){
    return this.http.get<Episodio[]>(`${this.API_BASE_URL}?latest`)
  }

  getAnimeByCategory(category:string){
    return this.http.get<Anime[]>(`${this.API_BASE_URL}?categoria=${category}`).pipe(tap(console.log))
  }

  
}
