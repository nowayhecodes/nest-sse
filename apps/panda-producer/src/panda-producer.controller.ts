import { Body, Controller, Post } from '@nestjs/common';
import { PandaProducerService } from './panda-producer.service';

interface EventBody {
  name: string;
  age: number;
}

@Controller('panda')
export class PandaProducerController {
  constructor(private readonly pandaProducerService: PandaProducerService) {}

  @Post('message')
  async sendMessage(@Body() body: Record<string, any>) {
    this.pandaProducerService.publishMessage(body);
  }

  @Post('produce')
  async publishEvent(@Body() body: EventBody) {
    this.pandaProducerService.publishEvent(body.name, body.age);
  }
}
