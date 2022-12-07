import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      firstName: 'Rina',
      lastName: 'Dog',
      email: 'rina@dog.com',
      interests: ['digging', 'eating'],
      grewUpIn: 'Italy',
      currentlyLiveIn: 'UK',
      favouriteAnimal: 'squirrel',
    },
    {
      id: '2',
      firstName: 'Alex',
      lastName: 'Jennings',
      email: 'alex@dog.com',
      interests: ['coding', 'eating'],
      grewUpIn: 'UK',
      currentlyLiveIn: 'UK',
      favouriteAnimal: 'wolf',
    },
  ];

  findAll(): User[] {
    return this.users;
  }
}
