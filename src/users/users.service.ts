import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }
}

// id: '1',
// firstName: 'Rina',
// lastName: 'Dog',
// email: 'rina@dog.com',
// interests: ['digging', 'eating'],
// grewUpIn: 'Italy',
// currentlyLiveIn: 'UK',
// favouriteAnimal: 'squirrel',
// },
// {
// id: '2',
// firstName: 'Alex',
// lastName: 'Jennings',
// email: 'alex@dog.com',
// interests: ['coding', 'eating'],
// grewUpIn: 'UK',
// currentlyLiveIn: 'UK',
// favouriteAnimal: 'wolf',
// },
