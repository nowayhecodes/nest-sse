import { Test, TestingModule } from '@nestjs/testing';
import { PandaConsumerController } from './panda-consumer.controller';
import { PandaConsumerService } from './panda-consumer.service';

describe('PandaConsumerController', () => {
  let pandaConsumerController: PandaConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PandaConsumerController],
      providers: [PandaConsumerService],
    }).compile();

    pandaConsumerController = app.get<PandaConsumerController>(PandaConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pandaConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
