import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';
import { Location } from '@angular/common';
import {Propagator} from "../../propagator";
import {Donor} from "../../donor";
import {PropagatorService} from "../../propagator/propagator.service";
import {DonorService} from "../../donor.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html'
})
export class UserRegisterComponent implements OnInit {
  public user: User;
  public propagator : Propagator;
  public donor: Donor;


  constructor(private router: Router,
              private location: Location,
              private userService: UserService,
              private propagatorService: PropagatorService,
              private donorService: DonorService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.user = new User();
    this.donor = new Donor();
    this.propagator = new Propagator();
  }

  onSubmit(): void {
    const userRadio = <HTMLInputElement>document.querySelector('#userRadio');
    const propagatorRadio = <HTMLInputElement>document.querySelector('#propagatorRadio');
    const donorRadio = <HTMLInputElement>document.querySelector('#donorRadio');
    if(userRadio.checked){
      this.user.username = this.user.id;
      this.userService.createResource({ body: this.user }).subscribe(
        () => {
          this.authenticationBasicService.login(this.user.id, this.user.password).subscribe(
            (user: User) => this.router.navigate(['users', user.id]));
        });
    } else if (propagatorRadio.checked){
      this.propagator.id = this.user.id
      this.propagator.email = this.user.email
      this.propagator.password = this.user.password
      this.propagator.username = this.propagator.id;
      console.log(this.propagator.id)
      console.log(this.propagator.email)
      console.log(this.propagator.password)
      this.propagatorService.createResource({ body: this.propagator }).subscribe(
        () => {
          this.authenticationBasicService.login(this.propagator.id, this.propagator.password).subscribe(
            (propagator: Propagator) => this.router.navigate(['users', propagator.id]));
        });
    }

  }

  onCancel(): void {
    this.location.back();
  }
}
