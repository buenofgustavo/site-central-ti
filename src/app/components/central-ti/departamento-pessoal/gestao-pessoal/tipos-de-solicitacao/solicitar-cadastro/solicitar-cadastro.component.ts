import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmacaoCadastroComponent } from 'src/app/components/central-ti/modais/modais-dp/dialog/dialog-confirmacao-cadastro/dialog-confirmacao-cadastro.component';
import { MatDialog } from '@angular/material/dialog';

interface Departamentos {
  value: number;
  viewValue: string;
}

interface Filiais {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-solicitar-cadastro',
  templateUrl: './solicitar-cadastro.component.html',
  styleUrls: ['./solicitar-cadastro.component.scss']
})
export class SolicitarCadastroComponent {
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

  inputItemFormControl = new FormControl();
  textareaItemFormControl = new FormControl();

  mensagem: string = '';
  comentarios: string[] = [];

  enviarMensagem() {
    // Adicionar o comentário à lista de comentários
    this.comentarios.push(this.mensagem);
    
    // Limpar o campo de entrada
    this.mensagem = '';
  }
  imagemSelecionadaTermo: File | null = null
  anexarTermo(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imagemSelecionadaTermo = event.target.files[0];
    }
  }

  imagemSelecionadaContrato: File | null = null
  anexarContrato(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imagemSelecionadaContrato = event.target.files[0];
    }
  }

  constructor(private dialog: MatDialog) {}

  openConfirmar() {
    this.dialog.open(DialogConfirmacaoCadastroComponent);
  }

}
