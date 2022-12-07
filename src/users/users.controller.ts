import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'Get all users';
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `User ${param.id}`;
  }

  @Post()
  create(@Body() createUserDto: createUserDto): string {
    return `
            firstName: ${createUserDto.firstName}
            lastName: ${createUserDto.lastName}
            email: ${createUserDto.email}
            interests: ${createUserDto.interests}
            grewUpIn: ${createUserDto.grewUpIn}
            currentlyLiveIn: ${createUserDto.currentlyLiveIn}
            favouriteAnimal: ${createUserDto.favouriteAnimal}
            `;
  }
}
