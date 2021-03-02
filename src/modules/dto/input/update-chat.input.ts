import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateChatInput {
  
  @Field()
  @IsNotEmpty()
  chatId: string
  
  @Field()
  @IsNotEmpty()
  timeStamp: string;
  
  @Field()
  @IsNotEmpty()
  senderId: string;

  @Field()
  @IsNotEmpty()
  message: string
  
}