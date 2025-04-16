import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import Firestore methods

@Component({
  selector: 'app-admin',
  templateUrl: '../admin_tableau_de_bord/admin.component.html',
  styleUrls: ['../admin_tableau_de_bord/admin.component.css']
})
export class AdminComponent implements OnInit {
  tachesTerminees = 0;
  tachesEnCours = 0;
  nombreEmployes = 0;
  nombreTotalTaches = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadStats();  // Load the stats from Firebase on component init
  }

  // Method to fetch stats from Firebase
  async loadStats() {
    const db = getFirestore();  // Initialize Firestore
    const docRef = doc(db, "stats", "dashboard");  // Reference the "dashboard" document from the "stats" collection
    const docSnap = await getDoc(docRef);  // Fetch the document

    if (docSnap.exists()) {
      const data = docSnap.data(); // Get the data from Firestore document
      this.tachesTerminees = data?.['tachesTerminees'] || 0; // Set stats, fallback to 0 if not found
      this.tachesEnCours = data?.['tachesEnCours'] || 0;
      this.nombreEmployes = data?.['nombreEmployes'] || 0;
      this.nombreTotalTaches = data?.['nombreTotalTaches'] || 0;
    } else {
      console.log("No dashboard data available");
    }
  }
}
