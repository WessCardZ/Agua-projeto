import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioConfig } from './entities/usuarioconfig.entity';
import { UsuarioConfigController } from './usuarioconfig.controller';
import { UsuarioConfigService } from './usuarioconfig.service';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioConfig])],
    controllers: [UsuarioConfigController],
    providers: [UsuarioConfigService]
})
export class UsuarioConfigModule { }
