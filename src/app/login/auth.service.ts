import { Usuario } from './../model/Usuario';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  showMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'usuario@email.com' && 
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      this.showMenu.emit(true);

      this.router.navigate(['/home']);

    } else {
      this.usuarioAutenticado = false;

      this.showMenu.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}