import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = new BehaviorSubject<User[]>(null!);
  constructor(private _databaseService: DatabaseService) {
    this.getUsers();
  }
  // populate users behavior subject
  private getUsers() {
    this._databaseService.getUsers().subscribe((users) => {
      this.users.next(users);
    });
  }
}
