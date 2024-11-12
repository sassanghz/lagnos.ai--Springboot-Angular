import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      // Placeholder for authentication check
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/home']);
    } else {
      alert('Please enter your email and password.');
    }
  }
}
