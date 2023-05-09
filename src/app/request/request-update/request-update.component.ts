import {Component} from '@angular/core';
import {Request} from "../request";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../request.service";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-request-update',
  templateUrl: './request-update.component.html',
  styleUrls: ['./request-update.component.scss']
})
export class RequestUpdateComponent {

  public request: Request;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestService: RequestService,
    private authenticationBasicService: AuthenticationBasicService
  ) {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.requestService.getResource(id).subscribe(
      (request: Request) => this.request = request);
  }
}
