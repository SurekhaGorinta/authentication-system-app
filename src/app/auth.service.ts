import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('user', username);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  signup(username: string, email: string, password: string) {
    console.log('User registered:', { username, email, password });
    alert('Signup successful! Please login.');
    this.router.navigate(['/']);
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }
}
