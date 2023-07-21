import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, ObjectId } from 'mongoose';
import { FileService, FileType } from 'src/shared/file/file.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { RoleService } from '../role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    private roleService: RoleService,
    private fileService: FileService,
  ) {}

  async create(userDTO: CreateUserDTO): Promise<User> {
    const createdUser = await this.UserModel.create({
      ...userDTO,
    });
    return createdUser.save();
  }

  async uploadAvatar(id: ObjectId, avatarFile): Promise<User> {
    const user = await this.UserModel.findById(id);
    const avatarPath = this.fileService.createFile(FileType.Avatar, avatarFile);

    user.Avatar = avatarPath;
    user.save();
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.UserModel.findById(id);
  }

  async findByEmail(Email: string): Promise<User> {
    return this.UserModel.findOne({ Email });
  }

  async delete(id: ObjectId): Promise<any> {
    const avatar = await this.UserModel.findById(id);
    this.fileService.remoweFile(avatar.Avatar);
    const user = await this.UserModel.findByIdAndDelete(id);
    return user._id;
  }

  async addRole(CreateRoleDTO: CreateRoleDTO) {
    const user = await this.UserModel.findById(CreateRoleDTO.userId);
    const role = await this.roleService.getRoleByValue(CreateRoleDTO.value);

    if (role && user) {
      await user.$add('role', role.id);
      return CreateRoleDTO;
    }
    throw new HttpException('Role or User not found', HttpStatus.NOT_FOUND);
  }
}
