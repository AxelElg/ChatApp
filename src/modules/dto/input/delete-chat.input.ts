import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class DeleteChatInput {
  @Field()
  @IsNotEmpty()
  chatId: string;
}