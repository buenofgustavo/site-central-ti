import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-ferias-dp',
  templateUrl: './modal-ferias-dp.component.html',
  styleUrls: ['./modal-ferias-dp.component.scss']
})
export class ModalFeriasDpComponent {
  formControl = new FormControl(new Date());
  ngModelDate = new Date();
}
