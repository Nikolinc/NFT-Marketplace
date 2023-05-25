import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ObjectId } from 'mongoose';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'avatar', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() CreateUserDTO: CreateUserDTO) {
    console.log('file', files);
    const { avatar } = files;
    return this.UserService.create(CreateUserDTO, avatar[0]);
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
