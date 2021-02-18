import { Module } from '@nestjs/common';
// import { UserModule } from './modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  // imports: [UserModule],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
