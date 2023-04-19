import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { User } from '../login-basic/user';

@Injectable({providedIn: 'root'})
export class UserService extends HateoasResourceOperation<User>{

  private user: User
  constructor() {
    super(User);
  }

  public findByUsernameContaining(query: string): Observable<ResourceCollection<User>> {
    return this.searchCollection('findByUsernameContaining', { params: { text: query } });
  }

  getUser(): User {
    console.log(this.user)
    return this.user
  }

  setUser() {
    this.user = JSON.parse(localStorage.getItem('currentUser'))
    console.log(this.user)
  }
  removeUser() {
    this.user = undefined
  }
}
