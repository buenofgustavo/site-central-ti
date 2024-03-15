import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModalColaboradoresDpComponent } from '../../modais/modais-dp/modal-colaboradores-dp/modal-colaboradores-dp.component';
import { MatDialog } from '@angular/material/dialog';

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
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'departamento', 'acao'];
  dataSource = new MatTableDataSource<TableColoboradores>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalColaboradoresDpComponent);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
