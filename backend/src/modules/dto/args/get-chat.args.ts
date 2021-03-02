import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetChatArgs {
  @Field()
  @IsNotEmpty()
  chatId: string
}