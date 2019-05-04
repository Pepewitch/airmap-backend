import { Test, TestingModule } from '@nestjs/testing';
import { AirmapGateway } from './airmap.gateway';

describe('AirmapGateway', () => {
  let gateway: AirmapGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirmapGateway],
    }).compile();

    gateway = module.get<AirmapGateway>(AirmapGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
