import { Controller, Get, HttpStatus, Param, ParseIntPipe, Res } from '@nestjs/common';
import { RegistroAguaService } from './registro-agua.service';
import { RegistroAgua } from './interfaces/registro-agua.interface';

@Controller('registro-agua')
export class RegistroAguaController {
    constructor(private registroAguaService: RegistroAguaService) { }

    @Get()
    findAll(): RegistroAgua[] {
        return this.registroAguaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const gatoEncontrado = this.registroAguaService.findById(id);
        if (gatoEncontrado) {
            res.status(HttpStatus.OK).json(gatoEncontrado);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexGatoEncontrado = this.registroAguaService.findIndexById(id);
        if (indexGatoEncontrado >= 0) {
            this.registroAguaService.deleteByIndex(indexGatoEncontrado);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
        this.registroAguaService.create(createCatDto);
        res.status(HttpStatus.CREATED).json(createCatDto);
    }    

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() cat: Cat, @Res() res: Response) {
        const indexGatoEncontrado = this.registroAguaService.findIndexById(id);
        if(indexGatoEncontrado >= 0){
            this.registroAguaService.update(indexGatoEncontrado, cat);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
