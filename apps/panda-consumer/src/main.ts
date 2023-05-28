import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { PandaConsumerModule } from './panda-consumer.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PandaConsumerModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  );
  await app.listen();
}
bootstrap();
