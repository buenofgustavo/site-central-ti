import { Component } from '@angular/core';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { ModalCadastroUsuarioDpComponent } from '../../modais/modais-dp/modal-cadastro-usuario-dp/modal-cadastro-usuario-dp.component';
import { ModalFeriasDpComponent } from '../../modais/modais-dp/modal-ferias-dp/modal-ferias-dp.component';



interface STATUS {
  value: number;
  viewValue: string;
}

interface TableColoboradores {
  tipo: string;
  status: string;
  data_abertura: string;
  requerente: string;
}

interface Colaboradores {
  value: number;
  viewValue: string;
}

interface Tipos {
  value: number;
  viewValue: string;
}


const ELEMENT_DATA: TableColoboradores[] = [
  {tipo: "", status: 'Em Aberto', data_abertura: "1.0079", requerente: 'H'},
  {tipo: "", status: 'Em Aberto', data_abertura: "4.0026", requerente: 'He'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Em Aberto', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Lithium', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Lithium', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Lithium', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Lithium', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Lithium', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Lithium', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Lithium', data_abertura: "6.941", requerente: 'Li'},
  {tipo: "", status: 'Lithium', data_abertura: "6.941", requerente: 'Li'},
];

@Component({
  selector: 'app-solicitacoes-dp',
  templateUrl: './solicitacoes-dp.component.html',
  styleUrls: ['./solicitacoes-dp.component.scss']
})
export class SolicitacoesDpComponent {
  displayedColumns: string[] = ['tipo', 'status', 'data_abertura', 'requerente', 'acao'];
  dataSource = new MatTableDataSource<TableColoboradores>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  Status: STATUS[] = [
    { value: 0, viewValue: 'Em Aberto' },
    { value: 1, viewValue: 'Em Andamento' },
    { value: 2, viewValue: 'Concluído' },
    { value: 3, viewValue: 'Fechado' },
  ];

  tipos: Tipos[] = [
    { value: 0, viewValue: 'Cadastro de Usuário' },
    { value: 1, viewValue: 'Férias' },
    { value: 2, viewValue: 'Desligamento' },
    { value: 3, viewValue: 'Mudança de Cargo' },
  ];
  
  colaboradores: Colaboradores[] = [
    { value: 0, viewValue: 'Gustavo' },
    { value: 1, viewValue: 'João' },
    { value: 2, viewValue: 'Rikally' },
    { value: 3, viewValue: 'Fabiano' },
    { value: 4, viewValue: 'Lucas' },
    { value: 5, viewValue: 'Ítalo' },
  ]

  constructor(private windowService: NbWindowService) {}

  openWindow() {
    this.windowService.open(ModalFeriasDpComponent, { title: `Window` });
  }

}
