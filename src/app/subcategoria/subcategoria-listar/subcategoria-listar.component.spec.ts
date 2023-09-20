import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaListarComponent } from './subcategoria-listar.component';

describe('SubcategoriaListarComponent', () => {
  let component: SubcategoriaListarComponent;
  let fixture: ComponentFixture<SubcategoriaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoriaListarComponent]
    });
    fixture = TestBed.createComponent(SubcategoriaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
