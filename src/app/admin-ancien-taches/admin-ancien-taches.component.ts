import { Component, OnInit } from '@angular/core';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-admin-ancien-taches',
  templateUrl: './admin-ancien-taches.component.html',
  styleUrls: ['./admin-ancien-taches.component.css']
})
export class AdminAncienTachesComponent implements OnInit {
  taches: any[] = [];

  constructor(private tacheService: TacheService) {}

  ngOnInit(): void {
    this.tacheService.getTaches().subscribe(data => {
      this.taches = data;
    });
  }

  supprimerTache(id: string) {
    this.tacheService.supprimerTache(id).then(() => {
      console.log('Tâche supprimée');
    });
  }
}
