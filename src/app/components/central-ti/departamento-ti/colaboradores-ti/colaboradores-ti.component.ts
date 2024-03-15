import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModalColaboradoresDpComponent } from '../../modais/modais-dp/modal-colaboradores-dp/modal-colaboradores-dp.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalColaboradoresTiComponent } from '../../modais/modais-ti/modal-colaboradores-ti/modal-colaboradores-ti.component';
import { ModalEditarColaboradoresTiComponent } from '../../modais/modais-ti/modal-editar-colaboradores-ti/modal-editar-colaboradores-ti.component';
import { DialogExclusaoColaboradoresTiComponent } from '../../modais/modais-ti/dialog/dialog-exclusao-colaboradores-ti/dialog-exclusao-colaboradores-ti.component';


interface TableColoboradores {
  cpf: string;
  nome: number;
  telefone: string;
  departamento: string;
  nomeComputador: string;
}

const ELEMENT_DATA: TableColoboradores[] = [
  {nome: 1, cpf: 'Hydrogen', telefone: "1.0079", departamento: 'H', nomeComputador:"a"},
  {nome: 2, cpf: 'Helium', telefone: "4.0026", departamento: 'He', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
  {nome: 3, cpf: 'Lithium', telefone: "6.941", departamento: 'Li', nomeComputador:"a"},
];


@Component({
  selector: 'app-colaboradores-ti',
  templateUrl: './colaboradores-ti.component.html',
  styleUrls: ['./colaboradores-ti.component.scss']
})
export class ColaboradoresTiComponent {
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'departamento', 'nomeComputador', 'acao'];
  dataSource = new MatTableDataSource<TableColoboradores>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openConfirmacao() {
    this.dialog.open(DialogExclusaoColaboradoresTiComponent);
  }
}
