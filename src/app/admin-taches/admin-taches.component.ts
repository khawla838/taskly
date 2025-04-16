import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-taches',
  templateUrl: './admin-taches.component.html',
  styleUrls: ['./admin-taches.component.css']
})
export class AdminTachesComponent {
  taskForm: FormGroup;

  constructor(private firestore: Firestore, private fb: FormBuilder) {
    // Initialisation du formulaire avec des validations
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required],
      employeeEmail: ['', [Validators.required, Validators.email]]
    });
  }

  // Soumission du formulaire à Firestore
  onSubmit(): void {
    if (this.taskForm.invalid) {
      console.warn('Formulaire invalide');
      return;
    }

    const taskData = this.taskForm.value;
    const tasksCollection = collection(this.firestore, 'tasks');

    addDoc(tasksCollection, taskData)
      .then(() => {
        console.log('Tâche ajoutée avec succès');
        this.taskForm.reset();
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout de la tâche :', error);
      });
  }
}
