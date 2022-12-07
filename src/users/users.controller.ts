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
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: createUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Delete('id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put('id')
  update(@Body() updateUserDto: createUserDto, @Param('id') id): string {
    return `Update ${id} - email: ${updateUserDto.email}`;
  }
}
