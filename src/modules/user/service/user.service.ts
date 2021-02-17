import { Injectable } from '@nestjs/common';
import { UserDto } from '../../../dto/user.dto';

@Injectable()
export class UserService {
  public users: UserDto[] = [];

  findAll(): UserDto[] {
    return this.users;
  }

  create(user: UserDto): UserDto {
    this.users.push(user);
    return user;
  } 

  update(updatedUser: UserDto): UserDto {
    this.users.splice(
      this.users.indexOf(
        this.users.find((user: UserDto): Boolean => user.id === updatedUser.id)
      ), 1, updatedUser);
    return updatedUser;
  }

  deleteUser(id: number): UserDto[] {
    this.users.splice(
      this.users.indexOf(
        this.users.find((user: UserDto): Boolean => user.id === id)
      ), 1);
    return this.users;
  }
}
