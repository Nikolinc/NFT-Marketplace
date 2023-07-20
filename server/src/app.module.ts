import { Module } from '@nestjs/common';
import { FileModule } from './shared/file/file.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'shared/static'),
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/NFTMarketplace'),
    UserModule,
    FileModule,
  ],
})
export class AppModule {}
