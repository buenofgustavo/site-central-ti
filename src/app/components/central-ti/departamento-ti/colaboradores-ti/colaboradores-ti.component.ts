import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModalColaboradoresDpComponent } from '../../modais/modais-dp/modal-colaboradores-dp/modal-colaboradores-dp.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalColaboradoresTiComponent } from '../../modais/modais-ti/modal-colaboradores-ti/modal-colaboradores-ti.component';
import { ModalEditarColaboradoresTiComponent } from '../../modais/modais-ti/modal-editar-colaboradores-ti/modal-editar-colaboradores-ti.component';

interface Departamentos {
  value: number;
  viewValue: string;
}

interface Situacoes {
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
  selector: 'app-colaboradores-ti',
  templateUrl: './colaboradores-ti.component.html',
  styleUrls: ['./colaboradores-ti.component.scss']
})
export class ColaboradoresTiComponent {
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'departamento', 'acao'];
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

  situacoes: Situacoes[] = [
    { value: 0, viewValue: 'Ativo' },
    { value: 1, viewValue: 'Desligado' },
  ]


  colaboradores: Colaboradores[] = [
    { value: 0, viewValue: 'Gustavo' },
    { value: 1, viewValue: 'João' },
    { value: 2, viewValue: 'Rikally' },
    { value: 3, viewValue: 'Fabiano' },
    { value: 4, viewValue: 'Lucas' },
    { value: 5, viewValue: 'Ítalo' },
  ]

  constructor(private dialog: MatDialog) {}

  openColaboradores() {
    this.dialog.open(ModalColaboradoresTiComponent);
  }

  openEditarColaboradores() {
    this.dialog.open(ModalEditarColaboradoresTiComponent);
  }
  deleteRow(element: any) {
    // Para excluir uma linha, você precisa encontrar o índice do elemento na fonte de dados
    const index = this.dataSource.data.indexOf(element);
    if (index !== -1) {
      // Se o elemento existir, remova-o da fonte de dados
      this.dataSource.data.splice(index, 1);
      // Notifique a tabela sobre a mudança na fonte de dados
      this.dataSource._updateChangeSubscription();
    }
  }
}
