import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreEmployeComponent } from './parametre-employe.component';

describe('ParametreEmployeComponent', () => {
  let component: ParametreEmployeComponent;
  let fixture: ComponentFixture<ParametreEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametreEmployeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametreEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
