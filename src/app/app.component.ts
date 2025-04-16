import { Component } from '@angular/core';
import { UserService } from './user.service';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { Router } from '@angular/router';
import { accueilComponent } from "./accueil/accueil.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [accueilComponent],
})
export class AppComponent {
logout() {
throw new Error('Method not implemented.');
}
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Liste des emails pour chaque rôle
        const adminEmails = ['AhmedRyahi@gmail.com'];  // Ajouter les emails des admins ici
        const employeeEmails = ['lamyaHammami@gmail.com', 'Rimakouki@gmail.com'];  // Ajouter les emails des employés ici
        const subEmployeeEmails = ['Moatazsaber@gmail.com', 'ErijRajhi@gmail.com'];  // Ajouter les emails des sous-employés ici

        // Déterminer le rôle en fonction de l'email
        let role = 'employee'; // valeur par défaut
        if (user.email && adminEmails.includes(user.email)) {
          role = 'admin';
        } else if (user.email && subEmployeeEmails.includes(user.email)) {
          role = 'sub-employee';
        } else if (user.email && employeeEmails.includes(user.email)) {
          role = 'employee';
        }

        // Ajouter l'utilisateur dans Firestore si ce n'est pas déjà fait
        await this.userService.addUserData(user, role);

        // Rediriger vers le tableau de bord approprié
        if (role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (role === 'employee') {
          this.router.navigate(['/employee']);
        } else if (role === 'sub-employee') {
          this.router.navigate(['/sous-employee']);
        }
      }
    });
  }
}
