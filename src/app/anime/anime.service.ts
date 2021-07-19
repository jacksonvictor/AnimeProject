import { AuthService } from './../login/auth.service';
import { Episodio } from './../model/Episode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Anime } from '../model/Anime';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private readonly API_BASE_URL = "https://appanimeplus.tk/meuanimetv-40.php"
  private favoriteSubject = new Subject<number>()
  favoriteAction$ = this.favoriteSubject.asObservable()

  constructor(private http: HttpClient, private authService: AuthService) { }

  searchAnime(anime: string) {
    return this.http.get<Anime[]>(`${this.API_BASE_URL}?search=${anime}`)
  }

  getLatestAnimes() {
    return this.http.get<Episodio[]>(`${this.API_BASE_URL}?latest`)
  }

  getAnimeByCategory(category: string) {
    return this.http.get<Anime[]>(`${this.API_BASE_URL}?categoria=${category}`)
  }

  getFavorites(): Anime[] {
    let animes: Anime[] = []

    for(let favorite of this.authService.getUsuarioLogado().favoritos){
      this.http.get<Anime[]>(`${this.API_BASE_URL}?info=${favorite}`).subscribe(anime => animes.push(anime[0]))
    }
    return animes
  }
}
