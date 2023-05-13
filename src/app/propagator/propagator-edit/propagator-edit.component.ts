import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { PropagatorService } from '../propagator.service';
import { Propagator } from '../propagator';


@Component({
  selector: 'app-propagator-edit',
  templateUrl: './propagator-edit.component.html',
  styleUrls: ['./propagator-edit.component.css']
})
export class PropagatorEditComponent {
  public propagator: Propagator = new Propagator();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private propagatorService: PropagatorService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.propagatorService.getResource(id).subscribe(
      (propagator: Propagator) => this.propagator = propagator );
  }

  onSubmit(): void {
      this.propagator.password = this.propagator.passwordReset ? this.propagator.password : undefined; // Don't edit if not a reset
      this.propagatorService.patchResource(this.propagator).subscribe(
        (patchedPropagator: Propagator) => {
          if (this.propagator.passwordReset) {
            this.authenticationService.logout();
            this.authenticationService.login(this.propagator.id, this.propagator.password).subscribe(
              (propagator: Propagator) => this.router.navigate(['propagator', propagator.id]));
          } else {
            this.router.navigate(['propagator', patchedPropagator.id]);
          }
        });
    }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentPropagator().id;
  }
}
