import { Usuario } from './../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarioCriado: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  fazerLogin() {
    this.authService.login(this.usuario);
  }

  novoUsuario() {
    this.usuarioCriado = false
    this.authService.novoUsuario(this.usuario).subscribe(
      next => {
        this.usuarioCriado = true
      },
      error => {
        this.usuarioCriado = false
      })
  }

}
