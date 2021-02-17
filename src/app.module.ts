import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  // imports: [UserModule],
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
