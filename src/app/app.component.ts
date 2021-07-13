import { AuthService } from './login/auth.service';
import { tap } from 'rxjs/operators';
import { AnimeService } from './anime/anime.service';
import { Component, OnInit } from '@angular/core';
import { Anime } from './model/Anime';
import { Observable } from 'rxjs';
import { Episodio } from './model/Episode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [ AnimeService ]
})
export class AppComponent {
  title = 'AnimeProject';
  
  categories: string[] = ["aventura","acao","comedia","drama","dublado","ecchi","escolar",
  "esporte","fantasia","filme","harem","historico","jogo","josei","magia","mecha","militar","misterio","ova",
  "poderes","psicologico","romance","samurai","sci-fi","seinen","shoujo","shounen","slice_of_life","sobrenatural","suspense","terror","yaoi","yuri"]

  showMenu: boolean = false


  constructor(private animeService: AnimeService,private router: Router, private authService:AuthService){
    
  }

  ngOnInit(){
    this.authService.showMenu.subscribe(
      show => this.showMenu = show
    );
  }

  ngOnDestroy(){
  }

  searchAnime(anime:string){
    console.log(anime)
    this.router.navigate(['/lista'], {queryParams: {'search': anime}});
  }

  

}
