import { Component } from '@angular/core';
import {TakeService} from "../take.service";
import {Router} from "@angular/router";
import { Take } from '../take-model';

@Component({
  selector: 'app-create-take',
  templateUrl: './create-take.component.html',
  styleUrls: ['./create-take.component.css']
})
export class CreateTakeComponent {
  take = new Take();

  constructor(private takeService: TakeService, private router: Router) {
    console.log(this.take);
  }

  onSubmit() {
    this.takeService.createResource({ body: this.take }).subscribe(
      () => {
        this.router.navigate(['/take']);
      }
    );
  }
}
