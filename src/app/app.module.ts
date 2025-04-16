import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Pour [(ngModel)]
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { accueilComponent } from './accueil/accueil.component'; // Nom corrigé en PascalCase
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminTachesComponent } from './admin-taches/admin-taches.component';

@NgModule({
    declarations: [],
  imports: [
    AdminTachesComponent,
    ReactiveFormsModule,
    accueilComponent,
    SignupComponent,
    LoginComponent,
    BrowserModule,
    FormsModule,
    RouterModule, // Nécessaire pour RouterOutlet et RouterLink
    AngularFireModule.initializeApp(environment.firebase), // Vérifiez environment.firebase
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppComponent // Importé comme standalone component
  ],
  providers: [],
})
export class AppModule { }