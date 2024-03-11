import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesligamentoColaboradorTiComponent } from './desligamento-colaborador-ti.component';

describe('DesligamentoColaboradorTiComponent', () => {
  let component: DesligamentoColaboradorTiComponent;
  let fixture: ComponentFixture<DesligamentoColaboradorTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesligamentoColaboradorTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesligamentoColaboradorTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
