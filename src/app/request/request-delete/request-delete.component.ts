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

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get(RequestKeys.Id);
    this.requestService.getResource(id).subscribe((request: Request) => {
      this.request = request;
    });
  }

  delete() {
    this.requestService.deleteResource(this.request).subscribe(() => {
      this.router.navigate(['/requests']).then();
    });
  }

}
