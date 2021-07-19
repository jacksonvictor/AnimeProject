import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../model/Usuario';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  private API_URL: string = "localhost:3000/user/login";
  private usuarioAutenticado: boolean = false;
  private usuarioLogado: Usuario

  showMenu = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) { }

  login(usuario: Usuario) {
    const user = { login: usuario.login, senha: usuario.senha }
    this.http.post<boolean>('/api/user/login', user).subscribe(data => {
        if (data) {
          this.buscarUsuarioPorLogin(usuario.login).subscribe(user => {this.usuarioLogado = user;console.log(this.usuarioLogado)})
          
          this.usuarioAutenticado = true;
          this.showMenu.emit(true);
          this.router.navigate(['/home']);

        } else {
          this.usuarioAutenticado = false;
          this.showMenu.emit(false);
        }
      })
  }

  favorito(id:number){
    if(this.usuarioLogado.favoritos.includes(id)){
      this.usuarioLogado.favoritos.splice(this.usuarioLogado.favoritos.indexOf(id), 1)
    }else{
      this.usuarioLogado.favoritos.push(id)
    }
    this.atualizarUsuario(this.usuarioLogado)
  }

  private atualizarUsuario(usuario: Usuario){
    this.http.put(`/api/user/${usuario._id}`,usuario).subscribe(data => console.log(data))
  }

  private buscarUsuarioPorLogin(login: string):Observable<Usuario>{
    return this.http.get<Usuario>(`/api/user/${login}`)
  }

  novoUsuario(usuario:Usuario){
    return this.http.post('/api/user',usuario)
  }

  logout() {
    this.usuarioAutenticado = false;
    this.showMenu.emit(false);
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  getUsuarioLogado(){
    return this.usuarioLogado
  }

  

}