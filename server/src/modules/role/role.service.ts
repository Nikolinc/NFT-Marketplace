import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
import { Model } from 'mongoose';
import { CreateRoleDTO } from './dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async createRole(createRoleDTO: CreateRoleDTO): Promise<Role> {
    const role = new this.roleModel(createRoleDTO);
    return role.save();
  }

  async getRoleByValue(value: string) {
    const role = await this.roleModel.findOne({ where: { value } });
    return role;
  }
}
