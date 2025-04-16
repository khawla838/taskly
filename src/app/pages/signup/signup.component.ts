import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private afAuth: AngularFireAuth, private route: Router) {}

  ngOnInit(): void {
    // Initialisation si nécessaire
  }

  signup(f: any) {
    const data = f.value;
    console.log(data);

    if (data.password !== data.confirmPassword) {
      console.error("Les mots de passe ne correspondent pas.");
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        // Redirection vers la page d'accueil après inscription réussie
        this.route.navigate(['/accueil/accueil.html']);
        console.log('Inscription réussie !');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'inscription :', error);
      });
  }
}
