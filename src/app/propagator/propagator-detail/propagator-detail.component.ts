import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropagatorService } from '../propagator.service';
import { Propagator } from '../propagator';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';


@Component({
  selector: 'app-propagator-detail',
  templateUrl: './propagator-detail.component.html',
  styleUrls: ['./propagator-detail.component.css']
})

export class PropagatorDetailComponent implements OnInit {
  public propagator: Propagator = new Propagator();

  constructor(private route: ActivatedRoute,
              private propagatorService: PropagatorService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.propagatorService.getResource(id).subscribe(
      propagator => {
        this.propagator = propagator;
      });
  }

  getCurrentPropagator(): Propagator {
    return this.authenticationService.getCurrentPropagator();
  }

  isRole(role: string): boolean {
      return this.authenticationService.isRole(role);
    }
}
