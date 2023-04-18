import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';

@Component({
  selector: 'app-propagator-delete',
  templateUrl: './propagator-delete.component.html'
})
export class PropagatorDeleteComponent implements OnInit {
  public propagator: Propagator = new Propagator();
  private id: string;

  constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private authenticationService: AuthenticationBasicService) {
    }
}
