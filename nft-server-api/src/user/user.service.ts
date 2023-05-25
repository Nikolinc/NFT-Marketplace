import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async create(CreateUserDTO: CreateUserDTO): Promise<User> {
    const createdCat = new this.UserModel(CreateUserDTO);
    return createdCat.save();
  }

  async getAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async getOne(Address: string): Promise<User | null> {
    return this.UserModel.findOne({ Address });
  }

  async delete(id: ObjectId): Promise<any> {
    const user = await this.UserModel.findByIdAndDelete(id);
    return user._id;
  }
}
