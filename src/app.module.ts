import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistroAguaModule } from './registro-agua/registro-agua.module';

@Module({
  imports: [RegistroAguaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
