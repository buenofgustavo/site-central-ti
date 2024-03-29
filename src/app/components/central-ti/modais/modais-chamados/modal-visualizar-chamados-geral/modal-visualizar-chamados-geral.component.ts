import { Component, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject  } from '@angular/core';

@Component({
  selector: 'app-modal-visualizar-chamados-geral',
  templateUrl: './modal-visualizar-chamados-geral.component.html',
  styleUrls: ['./modal-visualizar-chamados-geral.component.scss']
})
export class ModalVisualizarChamadosGeralComponent {
  mensagem: string = '';
  comentarios: string[] = [];

  enviarMensagem() {
    // Adicionar o comentário à lista de comentários
    this.comentarios.push(this.mensagem);
    
    // Limpar o campo de entrada
    this.mensagem = '';
  }
    imagemSelecionadaContrato: File | null = null
  anexar(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imagemSelecionadaContrato = event.target.files[0];
    }
  }

  dados: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dados = data.dados;
  }

}
