import { Component } from '@angular/core';

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
}
