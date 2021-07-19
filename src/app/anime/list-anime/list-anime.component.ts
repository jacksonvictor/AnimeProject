import { AnimeService } from './../anime.service';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { Anime } from 'src/app/model/Anime';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.component.html',
  styleUrls: ['./list-anime.component.scss']
})
export class ListAnimeComponent implements OnInit {
  animePerCategory$: Observable<Anime[]>
  animeSearch$: Observable<Anime[]>
  inscricao: Subscription
  category: string
  animeSearch: string
  animeFound: boolean = false

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.category = queryParams['categoria']
        this.animeSearch = queryParams['search']
        if(this.category){
          this.getAnimePerCategory(this.category)
        }else if(this.animeSearch){
          this.searchAnime(this.animeSearch)
        }
        
      }
    );
  }

  ngOnDestroy():void {
    this.inscricao.unsubscribe()
  }

  searchAnime(anime:string){
    this.animeSearch$ = this.animeService.searchAnime(anime)
    if(this.animeSearch$){
      this.animeFound = true
    }
  }

  getAnimePerCategory(category:string){
    this.animePerCategory$ = this.animeService.getAnimeByCategory(category)
  }

}
