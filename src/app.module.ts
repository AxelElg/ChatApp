import { Module } from '@nestjs/common';
// import { UserModule } from './modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
  // imports: [UserModule],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
