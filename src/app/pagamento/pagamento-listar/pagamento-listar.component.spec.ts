import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoListarComponent } from './pagamento-listar.component';

describe('PagamentoListarComponent', () => {
  let component: PagamentoListarComponent;
  let fixture: ComponentFixture<PagamentoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoListarComponent]
    });
    fixture = TestBed.createComponent(PagamentoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
