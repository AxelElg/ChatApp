import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserResolver } from './reslovers/user.resolver';

@Module({
  providers: [UserResolver, UserService]
})
export class UserModule {}
