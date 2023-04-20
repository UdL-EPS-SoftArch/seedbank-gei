import {Component, OnInit} from '@angular/core';
import {Request} from "../request";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../request.service";
import {firstValueFrom} from "rxjs";
import {Propagator} from "../../propagator";

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

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.request = await firstValueFrom(this.requestService.getResource(id));
    this.request.propagator = await firstValueFrom(this.request.getRelation<Propagator>('propagator'));
  }
}
