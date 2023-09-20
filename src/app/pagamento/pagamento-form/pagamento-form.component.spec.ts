import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoFormComponent } from './pagamento-form.component';

describe('PagamentoFormComponent', () => {
  let component: PagamentoFormComponent;
  let fixture: ComponentFixture<PagamentoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoFormComponent]
    });
    fixture = TestBed.createComponent(PagamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
