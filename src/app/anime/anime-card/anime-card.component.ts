import { AuthService } from './../../login/auth.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent {
  @Input() image: string = ""
  @Input() title: string = ""
  @Input() id: string = ""
  @Input() latest: boolean = false

  @ViewChild('titleElement', { static: true }) titleElement: ElementRef
  @ViewChild('cardBody', { static: true }) cardBody: ElementRef

  @Output() favoriteChange = new EventEmitter<string>();

  fontSize: number = 0.9
  div: number
  texto: number
  autenticado: boolean
  favoritoClass: boolean = false

  constructor(private authService:AuthService,private renderer: Renderer2, private elemRef: ElementRef) {
    this.autenticado = authService.usuarioEstaAutenticado()
    
  }

  ngAfterViewInit(): void {

    this.div = this.cardBody.nativeElement.clientHeight;
    this.texto = this.titleElement.nativeElement.clientHeight;

    if((this.div - this.texto) < 0){
      (this.titleElement.nativeElement as HTMLParagraphElement).style.fontSize = `${0.7}em`
    }
    
  }

  ngOnInit(){
    if(this.autenticado && this.authService.getUsuarioLogado().favoritos.includes(parseInt(this.id))){
      this.favoritoClass = true
    }else{
      this.favoritoClass = false
    }
  }


  onClick(srcElement: any) {
    console.log(srcElement.className)
    if (srcElement.className === "fa-star far") {
      srcElement.className = "fa-star fas"
    } else {
      srcElement.className = "fa-star far"
    }
    this.favoriteChange.emit(this.id)
    this.authService.favorito(parseInt(this.id))
  }
}
