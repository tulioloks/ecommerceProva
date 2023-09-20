import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaFormComponent } from './subcategoria-form.component';

describe('SubcategoriaFormComponent', () => {
  let component: SubcategoriaFormComponent;
  let fixture: ComponentFixture<SubcategoriaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoriaFormComponent]
    });
    fixture = TestBed.createComponent(SubcategoriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
