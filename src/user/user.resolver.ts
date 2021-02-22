import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/user.model";
import { UserService } from "./service/user.service";

@Resolver(() => User)
  export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => User, {name: 'user', nullable: true})
    getUser(@Args() getUserArgs: GetUserArgs): User {
      return this.userService.getUser(getUserArgs)
    }

    @Query(() => [User], {name: 'users', nullable: 'items'})
    getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
      return this.userService.getUsers(getUsersArgs)
    }

    @Mutation(() => User)
    createUser(@Args('createUserDate') createUserDate: CreateUserInput): User {
      return this.userService.createUser(createUserDate)
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
      return this.userService.updateUser(updateUserData)
    }

    @Mutation(() => [User])
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User[] {
      return this.userService.deleteUser(deleteUserData);
    }

}