import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userEmail: string = 'test@test.com'; // Placeholder email

  constructor(private router: Router) {}

  ngOnInit() {
    // Placeholder for setting user email from localStorage or a user service
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.userEmail = email;
    }
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }
}