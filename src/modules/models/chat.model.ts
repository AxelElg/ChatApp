import { Field, ObjectType } from "@nestjs/graphql";
import { Message } from'./message.model';

@ObjectType()
export class Chat {
  @Field()
  chatId: string;

  @Field()
  chatUsersId: string[];

  @Field()
  messages: Message[];
}