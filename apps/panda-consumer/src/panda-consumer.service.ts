import { Injectable } from '@nestjs/common';

@Injectable()
export class PandaConsumerService {
  getHello(): string {
    return 'Hello World!';
  }
}
