import { Body, Controller, Delete, Get, HttpStatus, Param, Res, Post, Put, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entities';
import { Response } from 'express';
import { CreateUsuarioOrUpdateDto } from './dto/create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) { }

    @Get()
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const usuarioDado = await this.usuarioService.findById(id);
        if (usuarioDado) {
            res.status(HttpStatus.OK).json(usuarioDado)
        }
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexUsuario = await this.usuarioService.findById(id);
        if (indexUsuario) {
            await this.usuarioService.remove(id)
            res.status(HttpStatus.NO_CONTENT).send()
        } else {
            res.status(HttpStatus.NOT_FOUND).send()
        }
    }

    @Post()
    async create(@Body() dto: CreateUsuarioOrUpdateDto, @Res() res: Response) {
        const criarUsuario = await this.usuarioService.save(dto);
        res.status(HttpStatus.CREATED).json(criarUsuario)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateUsuarioOrUpdateDto, @Res() res: Response) {
        const usuario = await this.usuarioService.findById(id);
        if (usuario) {
            await this.usuarioService.update(id, dto)
            res.status(HttpStatus.NO_CONTENT).send()
        } else {
            res.status(HttpStatus.NOT_FOUND).send()
        }
    }
}
