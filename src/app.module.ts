import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirmapModule } from './airmap/airmap.module';

@Module({
  imports: [AirmapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
