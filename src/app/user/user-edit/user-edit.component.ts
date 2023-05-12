import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';
import {Authority} from "../../login-basic/authority";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  public user: User = new User();
  @ViewChild('inputRole') inputRole!: ElementRef<HTMLInputElement>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getResource(id).subscribe(
      (user: User) => this.user = user );
  }

  onSubmit(): void {
    this.user.password = this.user.passwordReset ? this.user.password : undefined; // Don't edit if not a reset
    this.userService.patchResource(this.user).subscribe(
      (patchedUser: User) => {
        console.log('User after update: ', patchedUser);
        if (this.user.passwordReset) {
          this.authenticationService.logout();
          this.authenticationService.login(this.user.id, this.user.password).subscribe(
            (user: User) => this.router.navigate(['users', user.id]));
        } else {
          this.router.navigate(['users', patchedUser.id]);
        }
      });
  }
  onRolesChange(event: any): void {
    const roles = event.split(",");
    this.user.authorities = roles.map(role => new Authority({ authority: "ROLE_" + role.trim().toUpperCase() }));
  }
  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
