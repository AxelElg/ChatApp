import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Message } from "src/modules/models/message.model";

@InputType()
export class UpdateChatInput {
  @Field()
  @IsNotEmpty()
  chatId: string

  @Field()
  @IsNotEmpty()
  message: Message
}