import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonecedoresListarComponent } from './fonecedores-listar.component';

describe('FonecedoresListarComponent', () => {
  let component: FonecedoresListarComponent;
  let fixture: ComponentFixture<FonecedoresListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FonecedoresListarComponent]
    });
    fixture = TestBed.createComponent(FonecedoresListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
