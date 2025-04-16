async function afficherNbTaches() {
  const tachesSnapshot = await getDocs(collection(db, "taches"));
  const count = tachesSnapshot.size;
  document.getElementById("nb-taches").textContent = count;
}
afficherNbTaches();
