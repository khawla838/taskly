import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UserData {
  role: string;
}

@Component({
  selector: 'app-login',
  standalone: true, // Si tu utilises Angular standalone components (Angular 15+)
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  onSubmit() {
    console.log('🟡 Tentative de connexion...');

    if (!this.email || !this.password) {
      alert('Veuillez entrer un email et un mot de passe.');
      return;
    }

    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        const userId = userCredential.user?.uid;
        console.log('✅ Utilisateur connecté, UID:', userId);

        if (userId) {
          this.firestore.collection('users').doc(userId).get().subscribe((doc) => {
            if (doc.exists) {
              const role = (doc.data() as UserData).role;
              console.log('🧾 Rôle détecté:', role);

              if (role === 'admin') {
                this.router.navigate(['/admin/admin']);
              } else if (role === 'employee') {
                this.router.navigate(['/employee/employee']);
              } else if (role === 'sous_employee') {
                this.router.navigate(['/sous_employee/sous_employee']);
              } else {
                alert('Rôle inconnu.');
              }
            } else {
              alert('Utilisateur introuvable dans la base de données.');
            }
          });
        }
      })
      .catch((error) => {
        alert('Email ou mot de passe incorrect.');
        console.error('❌ Erreur de connexion:', error);
      });
  }
}
function checkUserRole(uid){
  firebase.firestore().collection('users').doc(uid).get()
  .then((doc) => {
    if (doc.exists) {
      switch (doc.data().role) {
        case 'admin':
          window.location.href = '../accueil/accueil.component.html';
          break;
          case 'employee':
          window.location.href = '../employee/employee.component.html';
          break;
          case 'sous_employee':
          window.location.href = '../sous_employee/sous_employee.component.html';  
          break;
      }
    }        
}
}
