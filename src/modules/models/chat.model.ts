import { Field, ObjectType } from "@nestjs/graphql";
import { IsArray } from "class-validator";
import { Message } from'./message.model';

@ObjectType()
export class Chat {

  @Field()
  chatId: string;

  @Field(() => [String])
  @IsArray()
  chatUsersId: string[];

  @Field(() => [Message])
  messages: Message[];
}