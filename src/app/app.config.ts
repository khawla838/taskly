import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

const routes: Routes = []; // Define your routes here

const firebaseConfig = {
  apiKey: "AIzaSyAWMq-TgcnEj54dzpE_jNzhdGfSplkfNlE",
  authDomain: "taskly-b1f68.firebaseapp.com",
  databaseURL: "https://taskly-b1f68-default-rtdb.firebaseio.com",
  projectId: "taskly-b1f68",
  storageBucket: "taskly-b1f68.firebasestorage.app",
  messagingSenderId: "286328508207",
  appId: "1:286328508207:web:87136fbe2e3b920b6d5bda"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};
