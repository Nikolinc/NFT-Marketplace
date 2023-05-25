import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ObjectId } from 'mongoose';

@Controller('/user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post()
  create(@Body() CreateUserDTO: CreateUserDTO) {
    return this.UserService.create(CreateUserDTO);
  }

  @Get('/all')
  getAll() {
    return this.UserService.getAll();
  }

  @Get(':address')
  getOne(@Param('address') address: string) {
    return this.UserService.getOne(address);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.UserService.delete(id);
  }
}
