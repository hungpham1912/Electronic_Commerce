import { UseFilters } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WebSocketServerOptions,
  WsException,
} from '@nestjs/websockets';
// import { Server } from 'http';
import { WsExceptionFilter } from './users/wsException/ws.exceoption';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server;

  private test : WebSocketServerOptions 

  @UseFilters(new WsExceptionFilter())
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string, so) {

    // this.test = new WebSocketServerOptions()
    console.log(this.test)

    // if (message == 's') {
    //   return new WsException('Invalid credentials.').getError();
    // }
    // console.log(this.server);
    // this.server.emit('message', message);
    // return message;
  }

  postManMessage(message: string) {
    if (message == 's') {
      throw new WsException('Invalid credentials.');
    }
    this.server.emit('message', { data: message });
  }
}
