import {Component} from '@angular/core';
import {AuthenticationBasicService} from './authentication-basic.service';
import {User} from './user';
import {Router} from '@angular/router';
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-login-navbar,[app-login-navbar]',
  templateUrl: './login-navbar.component.html',
  styleUrls: [],
})
export class LoginNavbarComponent {

  constructor(private authenticationService: AuthenticationBasicService, private router: Router, private userService: UserService) {}

  getCurrentUser(): User {
    return this.authenticationService.getCurrentUser();
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
  getProfileLink() {
    if (this.isRole('user')) {
      return ['/users', this.getCurrentUser().id];
    } else if (this.isRole('propagator')) {
      return ['/propagator', this.getCurrentUser().id];
    } else {
      return ['/users', this.getCurrentUser().id];
    }
  }


  logout(event): void {
    event.preventDefault();
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
