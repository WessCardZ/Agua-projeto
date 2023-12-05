import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RegistroAgua } from './entities/registro-agua.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRegistroAguaOrUpdateDto } from './dto/create-registroAgua.dto';
import { Usuario } from 'src/usuario/entities/usuario.entities';

@Injectable()
export class RegistroAguaService {

    constructor(
        @InjectRepository(RegistroAgua)
        private registroAguaRepository: Repository<RegistroAgua>
    ) { }

    findAll(): Promise<RegistroAgua[]> {
        return this.registroAguaRepository.find();
    }

    save(id: number, dto: CreateRegistroAguaOrUpdateDto): Promise<RegistroAgua> {
        const usuario = new Usuario();
        usuario.id = id;

        const registroAgua = new RegistroAgua();
        registroAgua.quantidadeML = dto.quantidadeML;
        registroAgua.dataHoraConsumo = new Date();
        registroAgua.usuario = usuario

        return this.registroAguaRepository.save(registroAgua);
    }

    findById(id: number): Promise<RegistroAgua | null> {
        return this.registroAguaRepository.findOneBy({ id });
    }

    async update(id: number, dto: CreateRegistroAguaOrUpdateDto): Promise<void> {
        await this.registroAguaRepository.update(id, dto);
    }

    async remove(id: number): Promise<void> {
        await this.registroAguaRepository.delete(id);
    }

}