import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateChatInput {
  @Field()
  @IsNotEmpty()
  inviterId: string

  @Field()
  @IsNotEmpty()
  inviteId: string
}