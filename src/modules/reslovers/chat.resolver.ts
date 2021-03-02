import { Resolver, Args, Mutation, Query } from "@nestjs/graphql";
import { GetChatArgs } from "../dto/args/get-chat.args";
import { CreateChatInput } from "../dto/input/create-chat.input";
import { DeleteChatInput } from "../dto/input/delete-chat.input";
import { UpdateChatInput } from "../dto/input/update-chat.input";
import { Chat } from "../models/chat.model";
import { ChatService } from '../service/chat.service';

@Resolver(() => Chat)
  export class ChatResolver {
    constructor(private readonly chatService: ChatService) {}

    @Mutation(() => Chat)
    createChat(@Args('createChatInput') createChatData: CreateChatInput): Chat {
      return this.chatService.createChat(createChatData)
    }

    @Query(() => Chat)
    getChat(@Args() getChatArgs: GetChatArgs): Chat {
      return this.chatService.findChat(getChatArgs)
    }

    @Mutation(() => Chat)
    updateChat(@Args('updateChatData') updateChatData: UpdateChatInput): Chat {
      return this.chatService.updateChat(updateChatData)
    }

    @Mutation(() => Chat)
    deleteChat(@Args('deleteChatData') deleteChatData: DeleteChatInput): Boolean {
      return this.chatService.deleteChat(deleteChatData);
    }

  }