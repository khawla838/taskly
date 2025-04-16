import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  login(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

}
