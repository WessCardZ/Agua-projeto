import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistroAguaController } from './registro-agua/registro-agua.controller';
import { RegistroAguaService } from './registro-agua/registro-agua.service';

@Module({
  imports: [],
  controllers: [AppController, RegistroAguaController],
  providers: [AppService, RegistroAguaService],
})
export class AppModule { }
