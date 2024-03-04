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
import { SolicitacoesDpComponent } from './components/central-ti/departamento-pessoal/solicitacoes-dp/solicitacoes-dp.component';


const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      {path: 'gestao-pessoal', component: GestaoPessoalComponent},
      {path: 'cadastrar-ferias', component: CadastrarFeriasComponent},
      {path: 'mudanca-de-cargo', component: MudancaDeCargoComponent},
      {path: 'solicitar-cadastro', component: SolicitarCadastroComponent},
      {path: 'solicitar-desligamento', component: SolicitarDesligamentoComponent},
      {path: 'solicitacoes-dp', component: SolicitacoesDpComponent},
      {path: 'colaboradores-dp', component: ColaboradoresDpComponent},
      {path: 'colaboradores-ti', component: ColaboradoresTiComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
