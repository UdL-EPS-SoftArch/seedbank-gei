import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Take } from '../take-model';
import { TakeService } from '../take-service';

@Component({
  selector: 'app-take-detail',
  templateUrl: './take-detail.component.html',
  styleUrls: ['./take-detail.component.css']
})
export class TakeDetailComponent {
  takeDetail:Take
  constructor(private route: ActivatedRoute,private userService: TakeService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getResource(id).subscribe(take => { this.takeDetail = take;});
  }
  
}
