import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

import { PandaConsumerService } from './panda-consumer.service';


export interface EventData {
  name: string;
  age: number;
}

@Controller('')
export class PandaConsumerController {
  @EventPattern('new-panda-arrived')
  async handleEvent(data?: EventData): Promise<EventData> {
    console.log(data);
    return data;
  }
}
