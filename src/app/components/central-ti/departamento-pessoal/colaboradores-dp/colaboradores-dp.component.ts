import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

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

interface TableColoboradores {
  cpf: string;
  nome: number;
  telefone: string;
  departamento: string;
}

const ELEMENT_DATA: TableColoboradores[] = [
  {nome: 1, cpf: 'Hydrogen', telefone: "1.0079", departamento: 'H'},
  {nome: 2, cpf: 'Helium', telefone: "4.0026", departamento: 'He'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li'},
];

@Component({
  selector: 'app-colaboradores-dp',
  templateUrl: './colaboradores-dp.component.html',
  styleUrls: ['./colaboradores-dp.component.scss']
})
export class ColaboradoresDpComponent {
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'departamento'];
  dataSource = new MatTableDataSource<TableColoboradores>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
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
  
}
