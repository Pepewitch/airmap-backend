import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AirmapService {
  getFile(path) {
    try {
      return fs.readFileSync(path, { encoding: 'base64' });
    } catch (error) {
      return '';
    }
  }
}
