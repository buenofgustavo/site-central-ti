import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudancaDeCargoTiComponent } from './mudanca-de-cargo-ti.component';

describe('MudancaDeCargoTiComponent', () => {
  let component: MudancaDeCargoTiComponent;
  let fixture: ComponentFixture<MudancaDeCargoTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MudancaDeCargoTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MudancaDeCargoTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
