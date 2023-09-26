import { Controller, Get } from '@nestjs/common';
import { RegistroAguaService } from './registro-agua.service';
import { RegistroAgua } from './interfaces/registro-agua.interface';

@Controller('registro-agua')
export class RegistroAguaController {
    constructor(private registroAguaService: RegistroAguaService) { }

    @Get()
    findAll(): RegistroAgua[] {
        return this.registroAguaService.findAll()
    }
}
