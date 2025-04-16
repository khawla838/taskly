import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic as originalPlatformBrowserDynamic } from '@angular/platform-browser-dynamic';
bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]
}).catch(err => console.error(err));
// Assure-toi d'avoir ceci :
function platformBrowserDynamic() {
  return originalPlatformBrowserDynamic();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Removed duplicate function definition to avoid errors.
