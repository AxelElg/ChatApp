import { Module } from '@nestjs/common';
// import { UserModule } from './modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ChatModule } from './modules/chat.module';
import { UserModule } from './modules/user.module';

@Module({
  // imports: [UserModule],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UserModule,
    ChatModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
