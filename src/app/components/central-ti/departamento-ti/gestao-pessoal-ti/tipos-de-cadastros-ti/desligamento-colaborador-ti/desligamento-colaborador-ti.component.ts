import { Component } from '@angular/core';

interface Colaboradores {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-desligamento-colaborador-ti',
  templateUrl: './desligamento-colaborador-ti.component.html',
  styleUrls: ['./desligamento-colaborador-ti.component.scss']
})
export class DesligamentoColaboradorTiComponent {
  colaboradores: Colaboradores[] = [
    { value: 0, viewValue: 'Gustavo' },
    { value: 1, viewValue: 'João' },
    { value: 2, viewValue: 'Rikally' },
    { value: 3, viewValue: 'Fabiano' },
    { value: 4, viewValue: 'Lucas' },
    { value: 5, viewValue: 'Ítalo' },
  ]
}
