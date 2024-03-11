import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFeriasTiComponent } from './cadastrar-ferias-ti.component';

describe('CadastrarFeriasTiComponent', () => {
  let component: CadastrarFeriasTiComponent;
  let fixture: ComponentFixture<CadastrarFeriasTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFeriasTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarFeriasTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
