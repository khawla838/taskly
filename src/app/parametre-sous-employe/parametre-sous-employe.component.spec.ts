import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreSousEmployeComponent } from './parametre-sous-employe.component';

describe('ParametreSousEmployeComponent', () => {
  let component: ParametreSousEmployeComponent;
  let fixture: ComponentFixture<ParametreSousEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametreSousEmployeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametreSousEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
