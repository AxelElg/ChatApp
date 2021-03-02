import { Module } from "@nestjs/common";
import { ChatService } from './service/chat.service';
import { ChatResolver } from './reslovers/chat.resolver';

@Module({
  providers: [ChatResolver, ChatService]
})
export class ChatModule {}