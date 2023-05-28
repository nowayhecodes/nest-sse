import { NestFactory } from '@nestjs/core';
import { PandaProducerModule } from './panda-producer.module';

async function bootstrap() {
  const app = await NestFactory.create(PandaProducerModule);
  await app.listen(3001);
}
bootstrap();
