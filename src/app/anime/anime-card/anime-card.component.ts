import { AuthService } from './../../login/auth.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent {
  @Input() image: string = ""
  @Input() title: string = ""
  @Input() favorite: boolean = false
  @Input() latest: boolean = false

  @ViewChild('titleElement', { static: true }) titleElement: ElementRef
  @ViewChild('cardBody', { static: true }) cardBody: ElementRef

  @Output() favoriteOnOff = new EventEmitter()

  fontSize: number = 0.9
  div: number
  texto: number
  autenticado: boolean

  constructor(private authService:AuthService) {
    this.autenticado = authService.usuarioEstaAutenticado()
    console.log(this.autenticado)
  }

  ngAfterViewInit(): void {

    this.div = this.cardBody.nativeElement.clientHeight;
    this.texto = this.titleElement.nativeElement.clientHeight;

    if((this.div - this.texto) < 0){
      (this.titleElement.nativeElement as HTMLParagraphElement).style.fontSize = `${0.7}em`
    }
    
  }

 

  mouseOverOut(srcElement: any) {
    /* if (srcElement.className === "far fa-star") {
      srcElement.className = "fas fa-star"
    } else {
      srcElement.className = "far fa-star"
    } */
  }

  onClick(srcElement: any) {
    this.favoriteOnOff.emit({title: this.title, action: srcElement.className === "fas fa-star"? true: false})
  }
}
