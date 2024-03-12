import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-chamados-geral',
  templateUrl: './criar-chamados-geral.component.html',
  styleUrls: ['./criar-chamados-geral.component.scss']
})
export class CriarChamadosGeralComponent {
  selectedItemPrioridade = '0';
  selectedItemCategoria = '0';
  imagemSelecionada: File | null = null
  anexar(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imagemSelecionada = event.target.files[0];
    }
  }
}