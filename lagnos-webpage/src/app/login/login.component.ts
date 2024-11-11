import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const isLoggedIn = this.authService.login(this.username, this.password);
    if (!isLoggedIn) {
      alert('Invalid credentials!');
    }
  }
}
