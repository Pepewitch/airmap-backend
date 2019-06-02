import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Client } from 'socket.io';
import { AirmapService } from './airmap.service';
import { join } from 'path';

const mockId = {
  10: new Array(10).fill(0).map((_, i) => `${i + 309}.png`),
  20: new Array(10).fill(0).map((_, i) => `${i + 319}.png`),
  30: new Array(10).fill(0).map((_, i) => `${i + 329}.png`),
  40: new Array(10).fill(0).map((_, i) => `${i + 339}.png`),
};

@WebSocketGateway({ namespace: 'airmap' })
export class AirmapGateway {
  constructor(private airmapService: AirmapService) {}
  @SubscribeMessage('image')
  handleMessage(client: Client, id: any): string {
    return this.airmapService.getFile(
      join(__dirname, '..', '..', 'assets', id),
    );
  }
  @SubscribeMessage('id')
  handleId(client: Client, date: SelectedDate): ImageId {
    return mockId;
  }
}

interface SelectedDate {
  from: Date;
  to: Date;
}
interface ImageId {
  [height: number]: string[];
}
