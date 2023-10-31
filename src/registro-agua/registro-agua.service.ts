import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RegistroAgua } from './entities/historico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRegistroAguaOrUpdateDto } from './dto/create-registroAgua.dto';

@Injectable()
export class RegistroAguaService {

    constructor(
        @InjectRepository(RegistroAgua)
        private registroAguaRepository: Repository<RegistroAgua>
    ) { }

    findAll(): Promise<RegistroAgua[]> {
        return this.registroAguaRepository.find();
    }

    save(dto: CreateRegistroAguaOrUpdateDto): Promise<RegistroAgua> {
        return this.registroAguaRepository.save(dto);
    }

    findById(id: number): Promise<RegistroAgua | null> {
        return this.registroAguaRepository.findOneBy({id});
    }

    async update(id: number, dto: CreateRegistroAguaOrUpdateDto): Promise<void> {
        await this.registroAguaRepository.update(id, dto);
    }

    async remove(id: number): Promise<void> {
        await this.registroAguaRepository.delete(id);
    }

}