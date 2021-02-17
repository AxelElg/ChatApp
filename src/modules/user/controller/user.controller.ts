import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

import { UserDto } from '../../../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}

  @Get('/')
  findAll(): UserDto[] {
    return this.userService.findAll();
  }

  @Post('/')
  create(@Body() user: UserDto): UserDto {
    return this.userService.create(user);    
  }

  @Put('/')
  update(@Body() user: UserDto ): UserDto {
    return this.userService.update(user);
  }

  @Delete('/')
  deleteUser(@Body() user: UserDto): UserDto[] {
    return this.userService.deleteUser(user.id);
  }
}
