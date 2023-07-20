import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { FileService } from 'src/shared/file/file.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { FileModule } from 'src/shared/file/file.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    FileModule,
  ],
  providers: [UserService, FileService],
  controllers: [UserController],
})
export class UserModule {}
