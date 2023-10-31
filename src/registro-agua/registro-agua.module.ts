import { Module } from '@nestjs/common';
import { RegistroAguaController } from './registro-agua.controller';
import { RegistroAguaService } from './registro-agua.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroAgua } from './entities/historico.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RegistroAgua])],
    controllers: [RegistroAguaController],
    providers: [RegistroAguaService]
})
export class RegistroAguaModule { }
