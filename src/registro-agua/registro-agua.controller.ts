import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { RegistroAguaService } from './registro-agua.service';
import { RegistroAgua } from './interfaces/registro-agua.interface';
import { Response } from 'express';
import { CreateRegistroAguaDto } from './dto/create-registroAgua.dto';

@Controller('registro-agua')
export class RegistroAguaController {
    constructor(private registroAguaService: RegistroAguaService) { }

    @Get()
    findAll(): RegistroAgua[] {
        return this.registroAguaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const registroDado = this.registroAguaService.findById(id);
        if (registroDado) {
            res.status(HttpStatus.OK).json(registroDado);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexRegistroDado = this.registroAguaService.findIndexById(id);
        if (indexRegistroDado >= 0) {
            this.registroAguaService.deleteByIndex(indexRegistroDado);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    create(@Body() createRegistroAguaDto: CreateRegistroAguaDto, @Res() res: Response) {
        this.registroAguaService.create(createRegistroAguaDto);
        res.status(HttpStatus.CREATED).json(createRegistroAguaDto);
    }    

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() registroAgua: RegistroAgua, @Res() res: Response) {
        const indexRegistroDado = this.registroAguaService.findIndexById(id);
        if(indexRegistroDado >= 0){
            this.registroAguaService.update(indexRegistroDado, registroAgua);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
