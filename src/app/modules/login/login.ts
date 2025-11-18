import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  email = '';
  password = '';
  error = '';
  showPassword = false;
  rememberMe = false;

  passwordStrength = 'weak';
  strengthLabel = 'Weak';

  showForgotModal = false;
  resetEmail = '';
  currentYear = new Date().getFullYear();

  isLightMode = false;

  constructor(private router: Router) {}

  ngOnInit() {
    /* Load saved email */
    const savedEmail = localStorage.getItem('remember_email');
    if (savedEmail) {
      this.email = savedEmail;
      this.rememberMe = true;
    }

    /* Load theme */
    const savedTheme = localStorage.getItem('theme');
    this.isLightMode = savedTheme === 'light';
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    localStorage.setItem('theme', this.isLightMode ? 'light' : 'dark');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  checkPasswordStrength() {
    const p = this.password;

    if (p.length < 4) {
      this.passwordStrength = 'weak';
      this.strengthLabel = 'Weak';
    } else if (p.match(/[A-Z]/) && p.match(/[0-9]/) && p.length > 6) {
      this.passwordStrength = 'strong';
      this.strengthLabel = 'Strong';
    } else {
      this.passwordStrength = 'medium';
      this.strengthLabel = 'Medium';
    }
  }

  login() {
    if (this.email === 'admin@demo.com' && this.password === 'admin123') {

      if (this.rememberMe) {
        localStorage.setItem('remember_email', this.email);
      }

      localStorage.setItem('auth_token', JSON.stringify({
        token: 'dummy-token',
        user: { email: this.email, role: 'admin' }
      }));

      this.router.navigate(['/dashboard']);

    } else {
      this.error = 'Invalid email or password.';
    }
  }

  loginWithGoogle() {
    alert('Simulating Google Login...');
  }

  openForgotPassword() {
    this.showForgotModal = true;
  }

  closeForgotPassword() {
    this.showForgotModal = false;
  }

  sendResetLink() {
    alert(`Reset link sent to ${this.resetEmail}`);
    this.showForgotModal = false;
  }
}
