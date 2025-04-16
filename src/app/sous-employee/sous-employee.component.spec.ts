import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousEmployeeComponent } from './sous-employee.component';

describe('SousEmployeeComponent', () => {
  let component: SousEmployeeComponent;
  let fixture: ComponentFixture<SousEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SousEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
