import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Message {
  @Field()
  timeStamp: string;

  @Field()
  senderId: string;

  @Field()
  message: string;
}