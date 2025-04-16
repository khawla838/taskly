import { ComponentFixture, TestBed } from '@angular/core/testing';

import { accueilComponent } from './accueil.component';
describe('LoginComponent', () => {
  let component: accueilComponent;
  let fixture: ComponentFixture<accueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [accueilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(accueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
