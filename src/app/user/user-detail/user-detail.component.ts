import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {PropagatorService} from "../../propagator/propagator.service";
import {DonorService} from "../../donor.service";
import {Propagator} from "../../propagator";
import {Donor} from "../../donor";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  public user: User = new User();
  public propagator: Propagator = new Propagator()
  public donor: Donor = new Donor()
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getResource(id).subscribe(
      user => {
        console.log(user)
        this.user = user;
      });
    /*this.propagatorService.getResource(id).subscribe(
      propagator => {
        this.propagator = propagator;
      });
    this.donorService.getResource(id).subscribe(
      donor => {
        this.donor = donor;
      });*/
  }

  getCurrentUser(): User {
    return this.authenticationService.getCurrentUser();
  }

  isRole(role: string): boolean {
        return this.authenticationService.isRole(role);
      }
}
