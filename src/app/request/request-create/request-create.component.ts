import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RequestService } from "../request.service";
import { Request } from "../request";
import { Location } from '@angular/common';
import { AuthenticationBasicService } from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  public request: Request;

  constructor(
    private router: Router,
    private locationService: Location,
    private requestService: RequestService,
    private authenticationBasicService: AuthenticationBasicService
  ) {
  }

  ngOnInit(): void {
    this.request = new Request();
  }

  onSubmit(): void {
    this.request.propagator = this.authenticationBasicService.getCurrentUser()
    this.requestService.createResource({ body: this.request }).subscribe(
      (request: Request) => {
        this.router.navigate(['requests', request.id]).then();
      }
    )
  }

  onCancel(): void {
    this.locationService.back();
  }
}
