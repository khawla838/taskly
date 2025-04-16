// Import des fonctions Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWMq-TgcnEj54dzpE_jNzhdGfSplkfNlE",
  authDomain: "taskly-b1f68.firebaseapp.com",
  databaseURL: "https://taskly-b1f68-default-rtdb.firebaseio.com",
  projectId: "taskly-b1f68",
  storageBucket: "taskly-b1f68.appspot.com", // Changé en .appspot.com
  messagingSenderId: "286328508207",
  appId: "1:286328508207:web:87136fbe2e3b920b6d5bda",
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Gestion du formulaire
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Récupération des valeurs
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    // 1. Création du compte
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // 2. Mise à jour du profil
    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`,
    });

    // 3. Enregistrement dans la base de données
    await set(ref(db, "users/" + user.uid), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      createdAt: new Date().toISOString(),
    });

    // 4. Feedback utilisateur
    showMessage("Account created successfully!", "success");
    console.log("User created:", user.uid);

    // 5. Redirection après 5secondes
    setTimeout(() => {
      window.location.href = "../login/login.component.html";
    }, 10000);
  } catch (error) {
    // Gestion des erreurs
    let errorMessage = "Registration failed.";

    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "This email is already registered.";
        break;
      case "auth/invalid-email":
        errorMessage = "Please enter a valid email address.";
        break;
      case "auth/weak-password":
        errorMessage = "Password should be at least 6 characters.";
        break;
      default:
        errorMessage = error.message;
    }

    showMessage(errorMessage, "error");
    console.error("Registration error:", error);
  }
});

// Fonction pour afficher les messages
function showMessage(message, type) {
  const authStatus = document.getElementById("authStatus");
  if (!authStatus) return;

  authStatus.textContent = message;
  authStatus.className = `auth-status ${type}`;
  authStatus.style.display = "block";

  setTimeout(() => {
    authStatus.style.display = "none";
  }, 5000);
}
