import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-adicionar-computadores-ti',
  templateUrl: './modal-adicionar-computadores-ti.component.html',
  styleUrls: ['./modal-adicionar-computadores-ti.component.scss']
})
export class ModalAdicionarComputadoresTiComponent {
  imagemSelecionada: File | null = null
  anexar(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imagemSelecionada = event.target.files[0];
    }
  }
  selectedItemCategoria = 0
}
