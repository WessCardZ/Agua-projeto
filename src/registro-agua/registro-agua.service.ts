import { Injectable } from '@nestjs/common';
import { RegistroAgua } from './interfaces/registro-agua.interface';

@Injectable()
export class RegistroAguaService {
    private readonly registrosAgua: RegistroAgua[] = [];

    findAll(): RegistroAgua[] {
        return this.registrosAgua;
    }
    create(registroAgua: RegistroAgua): void {
        this.registrosAgua.push(registroAgua)
    }
    findById(id: number): RegistroAgua {
        return this.registrosAgua.find(registroAgua => registroAgua.id === id)
    }
    findIndexById(id: number): number {
        return this.registrosAgua.findIndex(registroAgua => registroAgua.id === id)
    }
    deleteByIndex(index: number): void {
        this.registrosAgua.splice(index, 1)
    }
    update(index: number, registroAgua: RegistroAgua): void {
        this.registrosAgua.splice(index, 1, registroAgua)
    }
}
