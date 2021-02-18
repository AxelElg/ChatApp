import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateUserInput } from '../dto/input/create-user.input';
import { User } from '../models/user.model';
import { UpdateUserInput } from '../dto/input/update-user.input';
import { GetUserArgs } from '../dto/args/get-user.args';
import { GetUsersArgs } from '../dto/args/get-users.args';
import { DeleteUserInput } from '../dto/input/delete-user.input';

@Injectable()
export class UserService {
  private users: User[] = [];

  public createUser(createUserDate: CreateUserInput): User {
    const user: User = {
      userId: v4(),
      ...createUserDate

    }
    
    this.users.push(user);
    return user;
  }

  public updateUser(updateUserData: UpdateUserInput): User {
    const user: User = this.users.find(user => user.userId === updateUserData.userId);

    Object.assign(user, updateUserData);

    return user;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find(user => user.userId === getUserArgs.userId);

  }
  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map(userId => this.getUser({ userId }));
  }
  public deleteUser(deleteUserData: DeleteUserInput): User[] {
    const userIndex: number = this.users.findIndex(user => user.userId === deleteUserData.userId)

    this.users.splice(userIndex, 1);

    return this.users
  }

  // findAll(): User[] {
  //   return this.users;
  // }

  // create(user: User): User {
  //   this.users.push(user);
  //   return user;
  // } 

  // update(updatedUser: User): User {
  //   this.users.splice(
  //     this.users.indexOf(
  //       this.users.find((user: User): Boolean => user.id === updatedUser.id)
  //     ), 1, updatedUser);
  //   return updatedUser;
  // }

  // deleteUser(id: number): User[] {
  //   this.users.splice(
  //     this.users.indexOf(
  //       this.users.find((user: User): Boolean => user.id === id)
  //     ), 1);
  //   return this.users;
  // }
}
