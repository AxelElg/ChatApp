import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  userName: string
}