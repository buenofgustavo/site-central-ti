import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMudancaCargoComponent } from 'src/app/components/central-ti/modais/modais-dp/dialog/dialog-mudanca-cargo/dialog-mudanca-cargo.component';

interface Colaboradores {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-solicitar-desligamento',
  templateUrl: './solicitar-desligamento.component.html',
  styleUrls: ['./solicitar-desligamento.component.scss']
})
export class SolicitarDesligamentoComponent {
  colaboradores: Colaboradores[] = [
    { value: 0, viewValue: 'Gustavo' },
    { value: 1, viewValue: 'João' },
    { value: 2, viewValue: 'Rikally' },
    { value: 3, viewValue: 'Fabiano' },
    { value: 4, viewValue: 'Lucas' },
    { value: 5, viewValue: 'Ítalo' },
  ]

  mensagem: string = '';
  comentarios: string[] = [];

  enviarMensagem() {
    // Adicionar o comentário à lista de comentários
    this.comentarios.push(this.mensagem);
    
    // Limpar o campo de entrada
    this.mensagem = '';
  }
  constructor(private dialog: MatDialog) {}

  openConfirmar() {
    this.dialog.open(DialogMudancaCargoComponent);
  }
}