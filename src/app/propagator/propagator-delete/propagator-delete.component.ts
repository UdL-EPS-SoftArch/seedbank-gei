import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { PropagatorService } from '../propagator.service';
import { Propagator } from '../../login-basic/propagator';

@Component({
  selector: 'app-propagator-delete',
  templateUrl: './propagator-delete.component.html'
})
export class PropagatorDeleteComponent implements OnInit {
  public propagator: Propagator = new Propagator();
  private id: string;

  constructor(private route: ActivatedRoute,
                private router: Router,
                private propagatorService: PropagatorService,
                private authenticationService: AuthenticationBasicService) {
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.propagatorService.getResource(this.id).subscribe(
      propagator => this.propagator = propagator);
  }

  delete(): void {
    this.propagatorService.deleteResource(this.propagator).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });
  }
}
