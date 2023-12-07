import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Res, Post, Put } from '@nestjs/common';
import { UsuarioConfigService } from './usuarioconfig.service';
import { UsuarioConfig } from './entities/usuarioconfig.entity';
import { Response } from 'express';
import { CreateUsuarioConfigOrUpdateDto } from './dto/create-usuarioconfig.dto';

@Controller('usuarioconfig')
export class UsuarioConfigController {

    constructor(private usuarioConfigService: UsuarioConfigService) { }

    @Get()
    findAll(): Promise<UsuarioConfig[]> {
        return this.usuarioConfigService.findAll();
    }


    @Get(':id')
    async findOneId(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const usuarioDado = await this.usuarioConfigService.findById(id);
        if (usuarioDado) {
            res.status(HttpStatus.OK).json(usuarioDado)
        }
    }
    @Get('usuario/:userId')
    async findOneUserId(@Param('userId', ParseIntPipe) userId: number, @Res() res: Response) {
        const usuarioDado = await this.usuarioConfigService.findByUserId(userId);
        if (usuarioDado) {
            res.status(HttpStatus.OK).json(usuarioDado)
        }
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexUsuarioDado = await this.usuarioConfigService.findById(id);
        if (indexUsuarioDado) {
            await this.usuarioConfigService.remove(id)
            res.status(HttpStatus.NO_CONTENT).send()
        } else {
            res.status(HttpStatus.NOT_FOUND).send()
        }
    }

    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateUsuarioConfigOrUpdateDto, @Res() res: Response) {
        const criarConfigUsuario = await this.usuarioConfigService.save(id, dto);
        res.status(HttpStatus.CREATED).json(criarConfigUsuario)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateUsuarioConfigOrUpdateDto, @Res() res: Response) {
        const usuarioDado = await this.usuarioConfigService.findById(id);
        if (usuarioDado) {
            await this.usuarioConfigService.update(id, dto);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
