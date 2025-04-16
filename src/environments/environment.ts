// Configuration Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAWMq-TgcnEj54dzpE_jNzhdGfSplkfNlE",
  authDomain: "taskly-b1f68.firebaseapp.com",
  databaseURL: "https://taskly-b1f68-default-rtdb.firebaseio.com",  // Utilisation de Realtime Database
  projectId: "taskly-b1f68",
  storageBucket: "taskly-b1f68.appspot.com", // Correcte le nom du storageBucket
  messagingSenderId: "286328508207",
  appId: "1:286328508207:web:87136fbe2e3b920b6d5bda"
};

// Exportation de l'environnement avec la configuration Firebase
export const environment = {
  production: false,
  firebase: firebaseConfig // Réutilise la configuration directement ici
};
