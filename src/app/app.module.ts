import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbDatepickerModule } from '@nebular/theme'; // Importe o NbDatepickerModule

import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbStepperModule,
  NbThemeModule,
  NbUserModule,
  NbContextMenuModule,
  NbPositionBuilderService,
  NbCheckboxModule,
} from '@nebular/theme';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SolicitarCadastroComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/tipos-de-solicitacao/solicitar-cadastro/solicitar-cadastro.component';
import { SolicitarDesligamentoComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/tipos-de-solicitacao/solicitar-desligamento/solicitar-desligamento.component';
import { ColaboradoresTiComponent } from './components/central-ti/departamento-ti/colaboradores-ti/colaboradores-ti.component';
import { ColaboradoresDpComponent } from './components/central-ti/departamento-pessoal/colaboradores-dp/colaboradores-dp.component';
import { GestaoPessoalComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/gestao-pessoal.component';
import { CadastrarFeriasComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/tipos-de-solicitacao/cadastrar-ferias/cadastrar-ferias.component';
import { MudancaDeCargoComponent } from './components/central-ti/departamento-pessoal/gestao-pessoal/tipos-de-solicitacao/mudanca-de-cargo/mudanca-de-cargo.component';
import { SolicitacoesDpComponent } from './components/central-ti/departamento-pessoal/solicitacoes-dp/solicitacoes-dp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SolicitarCadastroComponent,
    SolicitarDesligamentoComponent,
    ColaboradoresTiComponent,
    ColaboradoresDpComponent,
    GestaoPessoalComponent,
    CadastrarFeriasComponent,
    MudancaDeCargoComponent,
    SolicitacoesDpComponent
  ],
  imports: [
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, NbEvaIconsModule,
    NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule,NbLayoutModule,NbMenuModule.forRoot(),NbSelectModule,
    NbSidebarModule.forRoot(), NbStepperModule, NbThemeModule.forRoot({ name: 'default' }),NbUserModule,MatTableModule, NbContextMenuModule,
    MatPaginatorModule,NbCheckboxModule,NbDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
