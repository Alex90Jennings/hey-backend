import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'Get all users'
    }

    @Post()
    create(): string {
        return 'create user'
    }
}
