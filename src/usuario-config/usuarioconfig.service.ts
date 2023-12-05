import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioConfig } from './entities/usuarioconfig.entity';
import { CreateUsuarioConfigOrUpdateDto } from './dto/create-usuarioconfig.dto';
import { Usuario } from 'src/usuario/entities/usuario.entities';

@Injectable()
export class UsuarioConfigService {
    constructor(
        @InjectRepository(UsuarioConfig)
        private usuarioConfigRepository: Repository<UsuarioConfig>
    ) { };

    findAll(): Promise<UsuarioConfig[]> {
        return this.usuarioConfigRepository.find();
    }

    save(id: number, dto: CreateUsuarioConfigOrUpdateDto): Promise<UsuarioConfig> {
        const usuario = new Usuario();
        usuario.id = id;

        const usuarioConfig = this.usuarioConfigRepository.create({
            ...dto,
            usuario: usuario
        })
        return this.usuarioConfigRepository.save(usuarioConfig)
    }

    findById(id: number): Promise<UsuarioConfig | null> {
        return this.usuarioConfigRepository.findOneBy({ id });
    }

    async update(id: number, dto: CreateUsuarioConfigOrUpdateDto): Promise<void> {
        await this.usuarioConfigRepository.update(id, dto)
    }

    async remove(id: number): Promise<void> {
        await this.usuarioConfigRepository.delete(id);
    }
}
