import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    userName: 'marzi karimi',
    profileUrl: 'https://xsgames.co/randomusers/assets/avatars/female/78.jpg',
  };
}
