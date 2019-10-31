import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser:IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Person',
      lastName: 'One'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName, lastName) {
    this.currentUser = {
      ...this.currentUser,
      firstName,
      lastName
    }
  }
}