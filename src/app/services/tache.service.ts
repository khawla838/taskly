import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  constructor(private firestore: Firestore) {}

  ajouterTache(tache: any) {
    const tachesRef = collection(this.firestore, 'taches');
    return addDoc(tachesRef, tache);
  }

  getTaches(): Observable<any[]> {
    const tachesRef = collection(this.firestore, 'taches');
    return collectionData(tachesRef, { idField: 'id' }) as Observable<any[]>;
  }

  supprimerTache(id: string) {
    const tacheDoc = doc(this.firestore, `taches/${id}`);
    return deleteDoc(tacheDoc);
  }

  modifierTache(id: string, tache: any) {
    const tacheDoc = doc(this.firestore, `taches/${id}`);
    return updateDoc(tacheDoc, tache);
  }
}
