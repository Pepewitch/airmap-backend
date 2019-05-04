import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('airmap')
export class AirmapController {
  @Get()
  message(@Req() req: Request) {
    return 'Hello Aipmap';
  }
}
