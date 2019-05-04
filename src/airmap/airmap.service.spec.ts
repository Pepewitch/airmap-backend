import { Test, TestingModule } from '@nestjs/testing';
import { AirmapService } from './airmap.service';

describe('AirmapService', () => {
  let service: AirmapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirmapService],
    }).compile();

    service = module.get<AirmapService>(AirmapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
