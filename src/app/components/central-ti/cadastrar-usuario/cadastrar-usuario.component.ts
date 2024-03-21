import { Component } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario-interface';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent {
  usuario: Usuario = {
    nome: "",
    cargo: "",
    email: "",
    senha:"",
    perfil: ""
  }

  create(){
    console.log(this.usuario);
  }
}
