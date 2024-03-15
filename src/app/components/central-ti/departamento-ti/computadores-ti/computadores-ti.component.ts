import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalComputadoresTiComponent } from '../../modais/modais-ti/modal-computadores-ti/modal-computadores-ti.component';
import { ModalAdicionarComputadoresTiComponent } from '../../modais/modais-ti/modal-adicionar-computadores-ti/modal-adicionar-computadores-ti.component';
import { DialogExclusaoComputadoresTiComponent } from '../../modais/modais-ti/dialog/dialog-exclusao-computadores-ti/dialog-exclusao-computadores-ti.component';



interface TableColoboradores {
  nomeComputador: string;
  nomeUsuario: number;
  mac: string;
  marca: string;
  modelo: string;
  status: string;
}

const ELEMENT_DATA: TableColoboradores[] = [
  {nomeUsuario: 1, nomeComputador: 'Hydrogen', mac: "1.0079", marca: 'H', modelo: '', status:'ativo'},
  {nomeUsuario: 2, nomeComputador: 'Helium', mac: "4.0026", marca: 'He', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
  {nomeUsuario: 3, nomeComputador: 'Lithium', mac: "6.941", marca: 'Li', modelo: '', status:'ativo'},
];
@Component({
  selector: 'app-computadores-ti',
  templateUrl: './computadores-ti.component.html',
  styleUrls: ['./computadores-ti.component.scss']
})
export class ComputadoresTiComponent {
  displayedColumns: string[] = ['nomeUsuario', 'nomeComputador', 'mac', 'marca', 'modelo','status', 'acao'];
  dataSource = new MatTableDataSource<TableColoboradores>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private dialog: MatDialog) {}

  openComputadores() {
    this.dialog.open(ModalComputadoresTiComponent);
  }

  openAdicionarComputadores() {
    this.dialog.open(ModalAdicionarComputadoresTiComponent);
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
    this.dialog.open(DialogExclusaoComputadoresTiComponent);
  }
}