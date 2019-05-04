import { Test, TestingModule } from '@nestjs/testing';
import { AirmapController } from './airmap.controller';

describe('Airmap Controller', () => {
  let controller: AirmapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirmapController],
    }).compile();

    controller = module.get<AirmapController>(AirmapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
