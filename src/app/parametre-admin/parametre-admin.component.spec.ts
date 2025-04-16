import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreAdminComponent } from './parametre-admin.component';

describe('ParametreAdminComponent', () => {
  let component: ParametreAdminComponent;
  let fixture: ComponentFixture<ParametreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametreAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
