import { Test, TestingModule } from '@nestjs/testing';
import { PandaProducerController } from './panda-producer.controller';
import { PandaProducerService } from './panda-producer.service';

describe('PandaProducerController', () => {
  let pandaProducerController: PandaProducerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PandaProducerController],
      providers: [PandaProducerService],
    }).compile();

    pandaProducerController = app.get<PandaProducerController>(PandaProducerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pandaProducerController.getHello()).toBe('Hello World!');
    });
  });
});
