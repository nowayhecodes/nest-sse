import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PandaProducerController } from './panda-producer.controller';
import { PandaProducerService } from './panda-producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PANDA_PRODUCER_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
  ],
  controllers: [PandaProducerController],
  providers: [PandaProducerService],
})
export class PandaProducerModule {}
