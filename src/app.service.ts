import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Projeto para beber água feito por Wesley e Robert';
  }
}
