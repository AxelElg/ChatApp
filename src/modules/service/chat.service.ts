import { Injectable } from "@nestjs/common";
import { v4 } from 'uuid';
import { CreateChatInput } from '../dto/input/create-chat.input';
import { Chat } from '../models/chat.model';
import { Message } from '../models/message.model';
import { UpdateChatInput } from '../dto/input/update-chat.input';
import { GetChatArgs } from '../dto/args/get-chat.args';
import { DeleteChatInput } from '../dto/input/delete-chat.input';

@Injectable()
export class ChatService {
  private chats: Chat[] = []

  public createChat(createChatData: CreateChatInput): Chat {
    const chat: Chat = {
      chatId: v4(),
      chatUsersId: [createChatData.inviterId, createChatData.inviteId],
      messages: []
    }
    this.chats.push(chat);
    return chat;
  }

  public findChat(getChatArgs: GetChatArgs): Chat {
    return this.chats.find(chat => chat.chatId === getChatArgs.chatId);
  }

  public updateChat(updateChatData: UpdateChatInput): Chat {
    const chat: Chat = this.chats.find(chat => chat.chatId === updateChatData.chatId);

    const message: Message = {
        timeStamp: updateChatData.timeStamp,
        senderId: updateChatData.senderId,
        message: updateChatData.message
    }
    chat.messages.push(message)

    return chat;
  }

  public deleteChat(deleteChatData: DeleteChatInput): Boolean {
    const chatIndex: number = this.chats.findIndex(chat => chat.chatId === deleteChatData.chatId)

    this.chats.splice(chatIndex, 1);

    return true
  }

}