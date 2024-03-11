import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Colaboradores {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-cadastrar-ferias-ti',
  templateUrl: './cadastrar-ferias-ti.component.html',
  styleUrls: ['./cadastrar-ferias-ti.component.scss']
})
export class CadastrarFeriasTiComponent {
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
}
