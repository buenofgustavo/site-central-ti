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
        {title: 'Solicitações Abertas',icon: '',link: '/solicitacoes-dp',},
        {title: 'Colaboradores',icon: '',link: '/colaboradores-dp',},
      ]
    },

    {
      title: 'Departamento T.I',
      icon: '',
      children: [
        {title: 'Colaboradores',icon: '',link: '/colaboradores-ti',},
      ]
    },


  ];
  
  items2 = [
    { title: 'Logout' },
  ];

  ngOnInit() {
  }

}