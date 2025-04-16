import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousEmployeeTachesComponent } from './sous-employee-taches.component';

describe('SousEmployeeTachesComponent', () => {
  let component: SousEmployeeTachesComponent;
  let fixture: ComponentFixture<SousEmployeeTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousEmployeeTachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousEmployeeTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
