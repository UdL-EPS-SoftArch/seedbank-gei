import {Component, OnInit} from '@angular/core';
import {Request} from "../request";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../request.service";
import {Propagator} from "../../propagator";
import {Take} from "../../take";

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  public request: Request = new Request();

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.requestService.getResource(id).subscribe(
      request => {
        this.request = request
        console.log(this.request)
        this.request.getRelation<Propagator>('propagator').subscribe(propagator => {
            console.log(`Propagator: ${JSON.stringify(propagator)}`)
          }
        )
        this.request.getRelation<Take>('take').subscribe(take => {
            console.log(`Take: ${JSON.stringify(take)}`)
          }
        )
      },
    )
  }
}
