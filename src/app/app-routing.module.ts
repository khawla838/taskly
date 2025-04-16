import { Routes } from '@angular/router';
import { AdminComponent} from './admin_tableau_de_bord/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SousEmployeeComponent } from './sous-employee/sous-employee.component';

const router: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Ajout des tableaux de bord
  { path: 'admin', component: AdminComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'sous_employee', component: SousEmployeeComponent },

  { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
