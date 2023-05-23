import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  controllers: [],
  providers: [],
  imports: [UserModule],
})
export class AppModule {}
