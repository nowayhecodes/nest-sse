import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PandaProducerService {
  constructor(@Inject('PANDA_PRODUCER_SERVICE') private client: ClientProxy) {}

  async publishMessage(message: Record<string, any>) {
    return this.client.send({ cmd: 'feed-panda' }, message);
  }

  async publishEvent(pandaName: string, age: number) {
    this.client.emit('new-panda-arrived', {
      name: pandaName,
      age: age,
    });
  }
}
