import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAncienTachesComponent } from './admin-ancien-taches.component';

describe('AdminAncienTachesComponent', () => {
  let component: AdminAncienTachesComponent;
  let fixture: ComponentFixture<AdminAncienTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAncienTachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAncienTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
