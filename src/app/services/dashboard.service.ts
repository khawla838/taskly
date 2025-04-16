import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private firestore: Firestore) {}

  getDashboardStats(): Observable<any> {
    const tachesRef = collection(this.firestore, 'taches');
    const usersRef = collection(this.firestore, 'utilisateurs');

    const taches$ = collectionData(tachesRef, { idField: 'id' });
    const users$ = collectionData(usersRef, { idField: 'id' });

    return new Observable(observer => {
      taches$.subscribe(taches => {
        users$.subscribe(users => {
          const tachesTerminees = taches.filter((t: any) => t.status === 'terminée').length;
          const tachesEnCours = taches.filter((t: any) => t.status === 'en cours').length;
          const nombreTotalTaches = taches.length;
          const nombreEmployes = users.length;

          observer.next({
            tachesTerminees,
            tachesEnCours,
            nombreTotalTaches,
            nombreEmployes
          });
        });
      });
    });
  }
}
