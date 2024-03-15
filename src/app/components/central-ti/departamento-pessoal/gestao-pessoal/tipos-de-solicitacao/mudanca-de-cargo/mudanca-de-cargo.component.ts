import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmarDesligamentoComponent } from 'src/app/components/central-ti/modais/modais-dp/dialog/dialog-confirmar-desligamento/dialog-confirmar-desligamento.component';
import { DialogMudancaCargoComponent } from 'src/app/components/central-ti/modais/modais-dp/dialog/dialog-mudanca-cargo/dialog-mudanca-cargo.component';

interface Departamentos {
  value: number;
  viewValue: string;
}

interface Filiais {
  value: number;
  viewValue: string;
}

interface Colaboradores {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-mudanca-de-cargo',
  templateUrl: './mudanca-de-cargo.component.html',
  styleUrls: ['./mudanca-de-cargo.component.scss']
})
export class MudancaDeCargoComponent {
  departamentos: Departamentos[] = [
    { value: 0, viewValue: 'T.I' },
    { value: 1, viewValue: 'Jurídico' },
    { value: 2, viewValue: 'Financeiro' },
    { value: 3, viewValue: 'Departamento Pessoal' },
    { value: 4, viewValue: 'Logística' },
    { value: 5, viewValue: 'Gerenciamento de Riscos' },
    { value: 6, viewValue: 'Ocorrências' },
    { value: 7, viewValue: 'Manutenção' },
    { value: 8, viewValue: 'Compras' },
    { value: 9, viewValue: 'Comercial' },
  ]
  
  filiais: Filiais[] = [
    { value: 0, viewValue: 'Matriz' },
    { value: 1, viewValue: 'Alexânia' },
    { value: 2, viewValue: 'Itu' },
    { value: 3, viewValue: 'Paranaguá' },
  ]

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

