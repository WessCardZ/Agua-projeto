import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuarioconfig.entity';
import { UsuarioController } from './usuarioconfig.controller';
import { UsuarioService } from './usuarioconfig.service';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule { }
