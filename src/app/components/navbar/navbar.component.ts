import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  items: NbMenuItem[] = [

    {
      title: 'Página Inicial',
      icon: 'home-outline',
      link: '/',
    },
    {
      title: 'Departamento Pessoal',
      icon: '',
      children: [
        {title: 'Gestão Pessoal',icon: '',link: '/gestao-pessoal'},
        {title: 'Colaboradores',icon: '',link: '/colaboradores-dp',},
      ]
    },

    {
      title: 'Departamento T.I',
      icon: '',
      children: [
        {title: 'Gestão Pessoal',icon: '',link: '/gestao-pessoal-ti'},
        {title: 'Chamados',icon: '',link: '/chamados-ti'},
        {title: 'Colaboradores',icon: '',link: '/colaboradores-ti',},
        {title: 'Computadores',icon: '',link: '/computadores-ti',},
      ]
    },
    
    {
      title: 'Chamados',
      icon: '',
      children: [
        {title: 'Criar Chamado',icon: '',link: '/criar-chamados-geral'},
        {title: 'Visualizar Chamados',icon: '',link: '/visualizar-chamados-geral'},
      ]
    },
    {
      title: 'Cadastrar Usuários',
      link:"/cadastrar-usuario"
    },
  ];
  
  items2 = [
    { title: 'Logout' },
  ];

  ngOnInit() {
  }

}