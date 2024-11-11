import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Simple mock authentication
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('user', username);  // Save user to localStorage (mock persistence)
      this.router.navigate(['/home']);  // Redirect to home page
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');  // Remove user from localStorage
    this.router.navigate(['/login']);  // Redirect to login page
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;  // Check if user is logged in
  }
}
