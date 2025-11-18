import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  dropdownOpen = false;
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const auth = localStorage.getItem('auth_token');
    if (auth) {
      this.user = JSON.parse(auth).user;
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  goToProfile(event: Event) {
    event.stopPropagation();
    alert('Profile page coming soon…');
  }

  logout(event: Event) {
    event.stopPropagation();
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}
