import { Injectable } from '@nestjs/common';
import { RegistroAgua } from './interfaces/registro-agua.interface';

@Injectable()
export class RegistroAguaService {
    private readonly registroAgua: RegistroAgua[] = [];

    findAll(): RegistroAgua[] {
        return this.registroAgua;
    }
}
