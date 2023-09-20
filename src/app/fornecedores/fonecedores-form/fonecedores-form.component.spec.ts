import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FonecedoresFormComponent } from './fonecedores-form.component';


describe('FonecedoresFormComponent', () => {
  let component: FonecedoresFormComponent;
  let fixture: ComponentFixture<FonecedoresFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FonecedoresFormComponent]
    });
    fixture = TestBed.createComponent(FonecedoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
