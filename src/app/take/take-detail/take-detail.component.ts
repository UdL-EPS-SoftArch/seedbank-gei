import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Take } from '../take-model';
import { TakeService } from '../take.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';

@Component({
  selector: 'app-take-detail',
  templateUrl: './take-detail.component.html',
  styleUrls: ['./take-detail.component.css']
})
export class TakeDetailComponent implements OnInit {
  takeDetail:Take
  constructor(private route: ActivatedRoute,private takeService: TakeService,private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.takeService.getResource(id).subscribe(take => { this.takeDetail = take;});
  }
  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

}
