import {Component} from '@angular/core';
import {UserService} from "../user/user.service";
import {User} from "../login-basic/user";

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent {

  user: User;

  constructor(private userService: UserService) {
    this.user = userService.getUser()
    console.log(this.user)
  }



}
