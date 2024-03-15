import { Component } from '@angular/core';

import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { ModalCadastroUsuarioDpComponent } from '../../modais/modais-dp/modal-cadastro-usuario-dp/modal-cadastro-usuario-dp.component';
import { ModalFeriasDpComponent } from '../../modais/modais-dp/modal-ferias-dp/modal-ferias-dp.component';
import { ModalDesligamentoDpComponent } from '../../modais/modais-dp/modal-desligamento-dp/modal-desligamento-dp.component';
import { ModalMudancaDeCargoDpComponent } from '../../modais/modais-dp/modal-mudanca-de-cargo-dp/modal-mudanca-de-cargo-dp.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalVisualizarChamadosGeralComponent } from '../../modais/modais-chamados/modal-visualizar-chamados-geral/modal-visualizar-chamados-geral.component';

interface TableColoboradores {
  tipo: string;
  status: string;
  data_abertura: string;
  requerente: string;
}

const ELEMENT_DATA: TableColoboradores[] = [
  {tipo: 'Relatórios', status: 'Lithium', data_abertura: "1.0079", requerente: 'H'},
  {tipo: 'Relatórios', status: 'Lithium', data_abertura: "1.0079", requerente: 'H'},
  {tipo: 'Relatórios', status: 'Lithium', data_abertura: "1.0079", requerente: 'H'},
  {tipo: 'Relatórios', status: 'Lithium', data_abertura: "1.0079", requerente: 'H'},
  {tipo: 'Relatórios', status: 'Lithium', data_abertura: "1.0079", requerente: 'H'},
];

@Component({
  selector: 'app-visualizar-chamados-geral',
  templateUrl: './visualizar-chamados-geral.component.html',
  styleUrls: ['./visualizar-chamados-geral.component.scss']
})
export class VisualizarChamadosGeralComponent {
  displayedColumns: string[] = ['tipo', 'status', 'data_abertura', 'requerente', 'acao'];
  dataSource = new MatTableDataSource<TableColoboradores>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(element: any) {
    const tipo = element.tipo;
  
    switch (tipo) {
      case 'Cadastro de Usuário':
        this.dialog.open(ModalCadastroUsuarioDpComponent, { 
          data: { title: 'Cadastro de Usuário', dados: { ...element } }
        });
        break;
      case 'Cadastro de Férias':
        this.dialog.open(ModalFeriasDpComponent, { 
          data: { title: 'Cadastro de Férias', dados: { ...element } }
        });
        break;
      case 'Desligamento':
        this.dialog.open(ModalDesligamentoDpComponent, { 
          data: { title: 'Desligamento', dados: { ...element } }
        });
        break;
      case 'Mudança de Cargo':
        this.dialog.open(ModalMudancaDeCargoDpComponent, { 
          data: { title: 'Mudança de Cargo', dados: { ...element } }
        });
        break;
        case 'Relatórios':
          this.dialog.open(ModalVisualizarChamadosGeralComponent, { 
            data: { title: 'Mudança de Cargo', dados: { ...element } }
          });
          break;
          case 'Outros Chamados':
            this.dialog.open(ModalVisualizarChamadosGeralComponent, { 
              data: { title: 'Mudança de Cargo', dados: { ...element } }
            });
            break;
      default:
        // Handle cases where the status doesn't match any expected value
        console.error(`Unexpected status: ${tipo}`);
        break;
    }
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

}