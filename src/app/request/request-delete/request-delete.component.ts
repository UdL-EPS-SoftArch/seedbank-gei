import {Component, OnInit} from '@angular/core';
import {Request} from "../request";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestKeys} from "../request-keys";
import {RequestService} from "../request.service";

@Component({
  selector: 'app-request-delete',
  templateUrl: './request-delete.component.html',
  styleUrls: ['./request-delete.component.css']
})
export class RequestDeleteComponent implements OnInit {
  public request: Request = new Request();
  id: string

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get(RequestKeys.Id);
    this.requestService.getResource(this.id).subscribe((request: Request) => {
      this.request = request;
    });
  }

  delete() {
    this.requestService.deleteResource(this.request).subscribe(() => {
      this.router.navigate(['/requests']).then();
    });
  }

}
