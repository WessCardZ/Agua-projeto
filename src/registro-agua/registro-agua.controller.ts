import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { RegistroAguaService } from './registro-agua.service';
// import { RegistroAgua } from './interfaces/registro-agua.interface';
import { Response } from 'express';
import { CreateRegistroAguaOrUpdateDto } from './dto/create-registroAgua.dto';
import { RegistroAgua } from './entities/registro-agua.entity';

@Controller('registro-agua')
export class RegistroAguaController {

    constructor(private registroAguaService: RegistroAguaService) { }

    @Get()
    findAll(): Promise<RegistroAgua[]> {
        return this.registroAguaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const registroDado = await this.registroAguaService.findById(id);
        if (registroDado) {
            res.status(HttpStatus.OK).json(registroDado);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexRegistroDado = await this.registroAguaService.findById(id);
        if (indexRegistroDado) {
            await this.registroAguaService.remove(id);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }


    @Post(':id')
    async create(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateRegistroAguaOrUpdateDto, @Res() res: Response) {
        const registraAgua = await this.registroAguaService.save(id, dto);
        res.status(HttpStatus.CREATED).json(registraAgua);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateRegistroAguaOrUpdateDto, @Res() res: Response) {
        const registroDado = await this.registroAguaService.findById(id);
        if (registroDado) {
            await this.registroAguaService.update(id, dto);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
