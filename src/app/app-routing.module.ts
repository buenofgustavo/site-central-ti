import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SolicitarCadastroComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/tipos-de-solicitacao/solicitar-cadastro/solicitar-cadastro.component';
import { SolicitarDesligamentoComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/tipos-de-solicitacao/solicitar-desligamento/solicitar-desligamento.component';
import { ColaboradoresDpComponent } from './components/central-ti/departamento-pessoal/colaboradores-dp/colaboradores-dp.component';
import { ColaboradoresTiComponent } from './components/central-ti/departamento-ti/colaboradores-ti/colaboradores-ti.component';
import { GestaoPessoalComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/gestao-pessoal.component';
import { CadastrarFeriasComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/tipos-de-solicitacao/cadastrar-ferias/cadastrar-ferias.component';
import { MudancaDeCargoComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/tipos-de-solicitacao/mudanca-de-cargo/mudanca-de-cargo.component';
import { ModalColaboradoresDpComponent } from './components/central-ti/modais/modais-dp/modal-colaboradores-dp/modal-colaboradores-dp.component';
import { ModalCadastroUsuarioDpComponent } from './components/central-ti/modais/modais-dp/modal-cadastro-usuario-dp/modal-cadastro-usuario-dp.component';
import { ModalFeriasDpComponent } from './components/central-ti/modais/modais-dp/modal-ferias-dp/modal-ferias-dp.component';
import { ModalMudancaDeCargoDpComponent } from './components/central-ti/modais/modais-dp/modal-mudanca-de-cargo-dp/modal-mudanca-de-cargo-dp.component';
import { ModalDesligamentoDpComponent } from './components/central-ti/modais/modais-dp/modal-desligamento-dp/modal-desligamento-dp.component';
import { UserInfoComponent } from './components/central-ti/departamento-pessoal/templates/user-info/user-info.component';
import { GestaoPessoalTiComponent } from './components/central-ti/departamento-ti/gestao-pessoal-ti/gestao-pessoal-ti.component';
import { CadastroColaboradorTiComponent } from './components/central-ti/departamento-ti/gestao-pessoal-ti/tipos-de-cadastros-ti/cadastro-colaborador-ti/cadastro-colaborador-ti.component';
import { ChamadosTiComponent } from './components/central-ti/departamento-ti/chamados-ti/chamados-ti.component';
import { ModalColaboradoresTiComponent } from './components/central-ti/modais/modais-ti/modal-colaboradores-ti/modal-colaboradores-ti.component';
import { ModalEditarColaboradoresTiComponent } from './components/central-ti/modais/modais-ti/modal-editar-colaboradores-ti/modal-editar-colaboradores-ti.component';
import { VisualizarChamadosGeralComponent } from './components/central-ti/chamados/visualizar-chamados-geral/visualizar-chamados-geral.component';
import { CriarChamadosGeralComponent } from './components/central-ti/chamados/criar-chamados-geral/criar-chamados-geral.component';
import { ModalVisualizarChamadosGeralComponent } from './components/central-ti/modais/modais-chamados/modal-visualizar-chamados-geral/modal-visualizar-chamados-geral.component';
import { ComputadoresTiComponent } from './components/central-ti/departamento-ti/computadores-ti/computadores-ti.component';
import { ModalComputadoresTiComponent } from './components/central-ti/modais/modais-ti/modal-computadores-ti/modal-computadores-ti.component';
import { ModalAdicionarComputadoresTiComponent } from './components/central-ti/modais/modais-ti/modal-adicionar-computadores-ti/modal-adicionar-computadores-ti.component';
import { DesvincularComputadoresComponent } from './components/central-ti/departamento-ti/gestao-pessoal-ti/tipos-de-cadastros-ti/desvincular-computadores/desvincular-computadores.component';
import { DialogConfirmacaoCadastroComponent } from './components/central-ti/modais/modais-dp/dialog/dialog-confirmacao-cadastro/dialog-confirmacao-cadastro.component';


const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      {path: 'gestao-pessoal', component: GestaoPessoalComponent},
      {path: 'gestao-pessoal-ti', component: GestaoPessoalTiComponent},
      {path: 'cadastrar-ferias', component: CadastrarFeriasComponent},
      {path: 'mudanca-de-cargo', component: MudancaDeCargoComponent},
      {path: 'solicitar-cadastro', component: SolicitarCadastroComponent},
      {path: 'chamados-ti', component: ChamadosTiComponent},
      {path: 'computadores-ti', component: ComputadoresTiComponent},
      {path: 'solicitar-desligamento', component: SolicitarDesligamentoComponent},
      {path: 'visualizar-chamados-geral', component: VisualizarChamadosGeralComponent},
      {path: 'criar-chamados-geral', component: CriarChamadosGeralComponent},
      {path: 'colaboradores-dp', component: ColaboradoresDpComponent},
      {path: 'colaboradores-ti', component: ColaboradoresTiComponent},
      {path: 'cadastrar-coloborador-ti', component: CadastroColaboradorTiComponent},
      {path: 'desvincular-computadores-ti', component: DesvincularComputadoresComponent},
      {path: 'modal-editar-coloboradores-ti', component: ModalEditarColaboradoresTiComponent},
      {path: 'modal-mudanca-de-cargo-dp', component: ModalMudancaDeCargoDpComponent},
      {path: 'modal-desligamento-dp', component: ModalDesligamentoDpComponent},
      {path: 'modal-colaboradores-ti', component: ModalColaboradoresTiComponent},
      {path: 'modal-ferias-dp', component: ModalFeriasDpComponent},
      {path: 'modal-colaboradores-dp', component: ModalColaboradoresDpComponent},
      {path: 'modal-cadastrar-usuario-dp', component: ModalCadastroUsuarioDpComponent},
      {path: 'modal-visualizar-chamados-geral', component: ModalVisualizarChamadosGeralComponent},
      {path: 'modal-computadores-ti', component: ModalComputadoresTiComponent},
      {path: 'modal-adcionar-computadores-ti', component: ModalAdicionarComputadoresTiComponent},
      {path: 'template-comentario', component: UserInfoComponent},
      {path: 'dialog-confirmacao-cadastrar-usuario', component: DialogConfirmacaoCadastroComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
