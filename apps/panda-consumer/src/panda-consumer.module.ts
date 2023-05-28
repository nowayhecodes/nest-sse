import { Module } from '@nestjs/common';
import { PandaConsumerController } from './panda-consumer.controller';
import { PandaConsumerService } from './panda-consumer.service';

@Module({
  imports: [],
  controllers: [PandaConsumerController],
  providers: [PandaConsumerService],
})
export class PandaConsumerModule {}
