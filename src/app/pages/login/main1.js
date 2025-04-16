import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  firebaseConfig = {
    apiKey: "AIzaSyAWMq-TgcnEj54dzpE_jNzhdGfSplkfNlE",
    authDomain: "taskly-b1f68.firebaseapp.com",
    databaseURL: "https://taskly-b1f68-default-rtdb.firebaseio.com",
    projectId: "taskly-b1f68",
    storageBucket: "taskly-b1f68.appspot.com",
    messagingSenderId: "286328508207",
    appId: "1:286328508207:web:87136fbe2e3b920b6d5bda",
  };

  app = initializeApp(this.firebaseConfig);
  auth = getAuth(this.app);
  db = getDatabase(this.app);

  constructor(router) {
    this.router = router;
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.checkUserRoleAndRedirect(user.uid);
      }
    });
  }

  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const uid = userCredential.user.uid;
      this.checkUserRoleAndRedirect(uid);
    } catch (error) {
      throw error;
    }
  }
  checkUserRoleAndRedirect(uid) {
    const userRef = ref(this.db, `users/${uid}`);
    onValue(
      userRef,
      (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          let redirectPath = "";
          switch (userData.role) {
            case "admin":
              redirectPath = "/admin_tableau_de_bord"; // Chemin correct
              break;
            case "employee":
              redirectPath = "/employee_tableau_de_bord"; // Chemin correct
              break;
            case "sous-employee":
              redirectPath = "/sous_employee_tableau_de_bord"; // Chemin correct
              break;
            default:
              redirectPath = "/accueil"; // Chemin correct
              console.error("❌ Rôle utilisateur non reconnu");
              break;
          }

          console.log(
            `🔁 Redirection vers ${redirectPath} pour rôle : ${userData.role}`
          );
          this.router.navigate([redirectPath]);
        } else {
          console.error("❌ Profil utilisateur non trouvé");
        }
      },
      { onlyOnce: true }
    );
  }
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi du formulaire

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error-message");

  // Expression régulière simple pour vérifier un email valide
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorDiv.textContent = "Adresse email invalide.";
    errorDiv.style.display = "block";
    return;
  }

  if (password.length < 6) {
    errorDiv.textContent =
      "Le mot de passe doit contenir au moins 6 caractères.";
    errorDiv.style.display = "block";
    return;
  }

  // Si tout est correct, cacher le message d'erreur
  errorDiv.style.display = "none";

  // Tu peux ici appeler ta fonction Firebase ou rediriger :
  console.log("Formulaire valide. Connexion en cours...");

  // Ex : appel Firebase auth ici (à ajouter plus tard)
});
