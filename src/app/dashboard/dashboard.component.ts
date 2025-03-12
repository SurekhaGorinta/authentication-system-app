import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username = localStorage.getItem('user');

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
