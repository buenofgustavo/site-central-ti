import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarComputadoresTiComponent } from './modal-adicionar-computadores-ti.component';

describe('ModalAdicionarComputadoresTiComponent', () => {
  let component: ModalAdicionarComputadoresTiComponent;
  let fixture: ComponentFixture<ModalAdicionarComputadoresTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdicionarComputadoresTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarComputadoresTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
