import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Tableau de bord');
  });

  it('should render welcome message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Bienvenue sur votre espace d\'administration.');
  });

  it('should render four stat cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.stat-card');
    expect(cards.length).toBe(4);
  });

  it('should render correct stat card values', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.stat-card');

    const expectedValues = [
      { icon: 'task', label: 'Tâche Terminée', value: '1', change: '+55% than last week' },
      { icon: 'pending', label: 'Tâches en cours de traitement', value: '0', change: '+1% than yesterday' },
      { icon: 'group', label: 'Employés', value: '124', change: '+3% than last month' },
      { icon: 'list', label: 'Nombre de tâches', value: '1', change: 'Just updated' }
    ];

    cards.forEach((card, index) => {
      const icon = card.querySelector('.material-icons')?.textContent;
      const label = card.querySelector('.stat-label')?.textContent;
      const value = card.querySelector('.stat-value')?.textContent;
      const change = card.querySelector('.stat-change')?.textContent;

      expect(icon).toBe(expectedValues[index].icon);
      expect(label).toBe(expectedValues[index].label);
      expect(value).toBe(expectedValues[index].value);
      expect(change).toBe(expectedValues[index].change);
    });
  });

  it('should render user menu icons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const icons = compiled.querySelectorAll('.user-menu .material-icons');
    expect(icons.length).toBe(3);
    expect(icons[0].textContent).toBe('settings');
    expect(icons[1].textContent).toBe('notifications');
    expect(icons[2].textContent).toBe('arrow_forward');
  });

  it('should render navigation items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navItems = compiled.querySelectorAll('.nav-item');
    expect(navItems.length).toBe(4);
  });

  it('should have one active navigation item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const activeItems = compiled.querySelectorAll('.nav-item.active');
    expect(activeItems.length).toBe(1);
    expect(activeItems[0].textContent?.trim()).toContain('Tableau de bord');
  });
});