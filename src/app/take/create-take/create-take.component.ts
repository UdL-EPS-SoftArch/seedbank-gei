import { Component } from '@angular/core';
import {TakeService} from "../take.service";

@Component({
  selector: 'app-create-take',
  templateUrl: './create-take.component.html',
  styleUrls: ['./create-take.component.css']
})
export class CreateTakeComponent {
  amount: number;
  weight: number;
  location: string;

  constructor(private takeService: TakeService) {}

  onSubmit() {
    this.takeService.createTake(this.amount, this.weight, this.location).then(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
