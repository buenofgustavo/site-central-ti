import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Colaboradores {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-cadastrar-ferias',
  templateUrl: './cadastrar-ferias.component.html',
  styleUrls: ['./cadastrar-ferias.component.scss']
})
export class CadastrarFeriasComponent {
  colaboradores: Colaboradores[] = [
    { value: 0, viewValue: 'Gustavo' },
    { value: 1, viewValue: 'João' },
    { value: 2, viewValue: 'Rikally' },
    { value: 3, viewValue: 'Fabiano' },
    { value: 4, viewValue: 'Lucas' },
    { value: 5, viewValue: 'Ítalo' },
  ]

  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  mensagem: string = '';
  comentarios: string[] = [];

  enviarMensagem() {
    // Adicionar o comentário à lista de comentários
    this.comentarios.push(this.mensagem);
    
    // Limpar o campo de entrada
    this.mensagem = '';
  }
}
