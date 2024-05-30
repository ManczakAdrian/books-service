import {
  Controller,
  ParseUUIDPipe,
  NotFoundException,
  Param,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { User } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { ConflictException, Injectable } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  getAll() {
    return this.usersService.getAll();
  }
  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.usersService.getById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Get('/:email')
  async getByEmail(@Param('email', new ParseUUIDPipe()) email: string) {
    const user = await this.usersService.getById(email);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
