import { AnimeService } from './../anime.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodio } from 'src/app/model/Episode';

@Component({
  selector: 'app-latest-anime',
  templateUrl: './latest-anime.component.html',
  styleUrls: ['./latest-anime.component.scss']
})
export class LatestAnimeComponent implements OnInit {
  latestAnimes$: Observable<Episodio[]>

  constructor(private animeService: AnimeService) { 
    this.latestAnimes$ = this.animeService.getLatestAnimes()
  }

  ngOnInit(): void {
  }

}
