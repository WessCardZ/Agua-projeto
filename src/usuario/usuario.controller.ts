import { Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) { }

    @Get()
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

}
