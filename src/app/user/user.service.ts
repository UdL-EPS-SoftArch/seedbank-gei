import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { User } from '../login-basic/user';

@Injectable({providedIn: 'root'})
export class UserService extends HateoasResourceOperation<User> {

  currentUser: User;

  constructor() {
    super(User);
    this.currentUser = JSON.parse(this.getUser());
  }

  public findByUsernameContaining(query: string): Observable<ResourceCollection<User>> {
    return this.searchCollection('findByUsernameContaining', { params: { text: query } });
  }

  getUser() {
    return localStorage.getItem('currentUser')
  }
}
