// ====================
// CONFIGURATION INITIALE
// ====================

// Vérifie que Firebase est bien chargé dans la page
if (typeof firebase === "undefined") {
  console.error("Firebase n'est pas chargé ! Vérifiez les scripts importés");
} else {
  console.log("Firebase détecté, version:", firebase.SDK_VERSION);
}

// Initialise la base de données Firebase Realtime
const database = firebase.database();

// Crée une référence vers le nœud "messages"
const messagesRef = database.ref("messages");

// ====================
// TEST DE CONNEXION À FIREBASE
// ====================

// Délai maximal de connexion (5 secondes)
let connectionTimeout = setTimeout(() => {
  console.error(
    "🕒 Connexion à Firebase trop longue (vérifiez internet/firebaseConfig)"
  );
}, 5000);

// Référence spéciale pour vérifier si l'utilisateur est connecté à Firebase
const connectionRef = database.ref(".info/connected");

// Surveille la connexion à Firebase
connectionRef.on("value", (snap) => {
  clearTimeout(connectionTimeout); // On annule le timer s’il y a une réponse

  if (snap.val() === true) {
    console.log("✅ Connecté à Firebase | URL:", database.ref().toString());
  } else {
    console.error(
      "❌ Déconnecté de Firebase | Vérifiez :\n- Les règles de la base\n- La configuration\n- Les bloqueurs de scripts"
    );
  }
});

// ====================
// GESTION DU FORMULAIRE
// ====================

// Quand on soumet le formulaire, exécute la fonction submitForm
document.getElementById("contact-form").addEventListener("submit", submitForm);

// Fonction exécutée quand l'utilisateur soumet le formulaire
async function submitForm(e) {
  e.preventDefault(); // Empêche la page de recharger

  try {
    // Récupère et valide les champs du formulaire
    const name = validateInput("name");
    const email = validateInput("email", true);
    const subject = validateInput("subject");
    const message = validateInput("message");

    // Envoie les données à Firebase
    await saveMessage(name, email, subject, message);

    // Réinitialise le formulaire
    document.getElementById("contact-form").reset();

    // Affiche un message de succès
    showAlert("Message envoyé avec succès !", "success");
  } catch (error) {
    // Affiche une erreur si quelque chose ne va pas
    console.error("Erreur lors de l'envoi:", error);
    showAlert("Erreur d'envoi : " + error.message, "error");
  }
}

// ====================
// FONCTIONS UTILES
// ====================

// Enregistre un message dans la base de données
async function saveMessage(name, email, subject, message) {
  // Vérifie si l'utilisateur est bien connecté à Firebase
  if (!(await checkConnection())) {
    throw new Error("Pas de connexion à Firebase");
  }

  // Crée une nouvelle entrée dans "messages"
  const newMessageRef = messagesRef.push();

  // Sauvegarde les données dans Firebase
  await newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
    timestamp: firebase.database.ServerValue.TIMESTAMP, // Heure du serveur
    ip: await fetchIP(), // Adresse IP de l'utilisateur (optionnelle)
  });
}

// Vérifie un champ du formulaire (et le format s'il s'agit d'un email)
function validateInput(id, isEmail = false) {
  const value = document.getElementById(id).value.trim();

  if (!value) {
    throw new Error(`Le champ ${id} est requis`);
  }

  // Vérifie que l'email a un bon format
  if (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    throw new Error("Email invalide");
  }

  return value;
}

// Affiche un message temporaire (alerte)
function showAlert(message, type = "success") {
  const alert = document.createElement("div");
  alert.textContent = message;

  // Style de l'alerte
  alert.style.position = "fixed";
  alert.style.bottom = "20px";
  alert.style.right = "20px";
  alert.style.padding = "15px 25px";
  alert.style.borderRadius = "4px";
  alert.style.color = "white";
  alert.style.zIndex = "1000";
  alert.style.animation = "fadeIn 0.3s";

  // Couleur selon le type d'alerte (vert ou rouge)
  alert.style.background = type === "success" ? "#4CAF50" : "#f44336";

  // Ajoute l'alerte à la page
  document.body.appendChild(alert);

  // Supprime l'alerte après 3 secondes
  setTimeout(() => {
    alert.style.animation = "fadeOut 0.5s";
    setTimeout(() => alert.remove(), 500);
  }, 3000);
}

// ====================
// FONCTIONS AVANCÉES
// ====================

// Vérifie si l'utilisateur est connecté à Firebase
async function checkConnection() {
  return new Promise((resolve) => {
    const ref = database.ref(".info/connected");
    ref
      .once("value")
      .then((snap) => resolve(snap.val() === true))
      .catch(() => resolve(false));
  });
}

// Récupère l'adresse IP publique de l'utilisateur
async function fetchIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch {
    return "unknown";
  }
}

// ====================
// ANIMATIONS CSS POUR LES ALERTES
// ====================

// Ajoute dynamiquement des animations CSS dans la page
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);
function verfier() {
  // declaration les champ input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  // Vérification le champ name est ce que vide ou non et le contenu est ce que almphabitique ou non
  if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
    alert("Veuillez entrer un nom valide (lettres uniquement).");
    return false;
  }
  // Vérification le champ email est ce que vide ou non et le contenu est ce que valide ou non
  if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return false;
  }
  // Vérification le champ subject est ce que vide ou non et le contenu est ce que valide ou non
  if (subject === "" || subject.length < 5) {
    alert("Le sujet doit contenir au moins 5 caractères.");
    return false;
  }
  // Vérification le champ message est ce que vide ou non et le contenu est ce que valide ou non
  if (message === "" || message.length < 10) {
    alert("Le message doit contenir au moins 10 caractères.");
    return false;
  }
  // Si tous les champs sont valides, on peut envoyer le message
  alert("Message envoyé avec succès !");
}
