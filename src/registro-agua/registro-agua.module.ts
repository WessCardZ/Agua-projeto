import { Module } from '@nestjs/common';
import { RegistroAguaController } from './registro-agua.controller';
import { RegistroAguaService } from './registro-agua.service';

@Module({
    controllers: [RegistroAguaController],
    providers: [RegistroAguaService]
})
export class RegistroAguaModule { }
