import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Departamentos {
  value: number;
  viewValue: string;
}

interface Colaboradores {
  value: number;
  viewValue: string;
}

interface Filiais {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-desvincular-computadores',
  templateUrl: './desvincular-computadores.component.html',
  styleUrls: ['./desvincular-computadores.component.scss']
})
export class DesvincularComputadoresComponent {
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

  colaboradores: Colaboradores[] = [
    { value: 0, viewValue: 'Gustavo' },
    { value: 1, viewValue: 'João' },
    { value: 2, viewValue: 'Rikally' },
    { value: 3, viewValue: 'Fabiano' },
    { value: 4, viewValue: 'Lucas' },
    { value: 5, viewValue: 'Ítalo' },
  ]
  
}