import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1010010110923',
      firstName: 'Rina',
      lastName: 'Dog',
      email: 'rina@dog.com',
      interests: ['digging', 'eating'],
      grewUpIn: 'Italy',
      currentlyLiveIn: 'UK',
      favouriteAnimal: 'squirrel',
    },
    {
      id: '1010010110925',
      firstName: 'Alex',
      lastName: 'Jennings',
      email: 'alex@dog.com',
      interests: ['coding', 'eating'],
      grewUpIn: 'UK',
      currentlyLiveIn: 'UK',
      favouriteAnimal: 'wolf',
    },
  ];
}
