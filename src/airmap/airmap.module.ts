import { Module } from '@nestjs/common';
import { AirmapController } from './airmap.controller';
import { AirmapGateway } from './airmap.gateway';
import { AirmapService } from './airmap.service';

@Module({
  controllers: [AirmapController],
  providers: [AirmapGateway, AirmapService],
})
export class AirmapModule {}
