import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesDpComponent } from './solicitacoes-dp.component';

describe('SolicitacoesDpComponent', () => {
  let component: SolicitacoesDpComponent;
  let fixture: ComponentFixture<SolicitacoesDpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacoesDpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacoesDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
