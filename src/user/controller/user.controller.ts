// import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

// import { User } from '../models/user.model';
// import { UserService } from '../service/user.service';

// @Controller('user')
// export class UserController {
//   constructor(private userService: UserService){}

//   @Get('/')
//   findAll(): User[] {
//     return this.userService.findAll();
//   }

//   @Post('/')
//   create(@Body() user: User): User {
//     return this.userService.create(user);    
//   }

//   @Put('/')
//   update(@Body() user: User ): User {
//     return this.userService.update(user);
//   }

//   @Delete('/')
//   deleteUser(@Body() user: User): User[] {
//     return this.userService.deleteUser(user.id);
//   }
// }
