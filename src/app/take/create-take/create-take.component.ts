import { Component } from '@angular/core';
import {TakeService} from "../take.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-take',
  templateUrl: './create-take.component.html',
  styleUrls: ['./create-take.component.css']
})
export class CreateTakeComponent {
  amount: number;
  weight: number;
  location: string;

  constructor(private takeService: TakeService, private router: Router) {}

  onSubmit() {
    this.takeService.createTake(this.amount, this.weight, this.location).then(
      (success) => {
        console.log(success);
        this.router.navigateByUrl('/take');
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
