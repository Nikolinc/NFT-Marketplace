import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/modules/user/schemas/user.schema';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop()
  Name: string;

  @Prop()
  Discription: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  User: User[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
