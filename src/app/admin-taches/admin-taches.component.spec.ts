import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTachesComponent } from './admin-taches.component';

describe('AdminTachesComponent', () => {
  let component: AdminTachesComponent;
  let fixture: ComponentFixture<AdminTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
