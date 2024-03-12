import { Component } from '@angular/core';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { ModalCadastroUsuarioDpComponent } from '../../modais/modais-dp/modal-cadastro-usuario-dp/modal-cadastro-usuario-dp.component';
import { ModalFeriasDpComponent } from '../../modais/modais-dp/modal-ferias-dp/modal-ferias-dp.component';
import { ModalDesligamentoDpComponent } from '../../modais/modais-dp/modal-desligamento-dp/modal-desligamento-dp.component';
import { ModalMudancaDeCargoDpComponent } from '../../modais/modais-dp/modal-mudanca-de-cargo-dp/modal-mudanca-de-cargo-dp.component';
import { NbWindowConfig } from '@nebular/theme';
import { MatDialog } from '@angular/material/dialog';
import { ModalVisualizarChamadosGeralComponent } from '../../modais/modais-chamados/modal-visualizar-chamados-geral/modal-visualizar-chamados-geral.component';




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
}