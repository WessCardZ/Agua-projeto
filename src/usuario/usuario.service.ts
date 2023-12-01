import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioOrUpdateDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { };

    findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    save(dto: CreateUsuarioOrUpdateDto): Promise<Usuario> {
        return this.usuarioRepository.save(dto)
    }

    findById(id: number): Promise<Usuario | null> {
        return this.usuarioRepository.findOneBy({ id });
    }

    async update(id: number, dto: CreateUsuarioOrUpdateDto): Promise<void> {
        await this.usuarioRepository.update(id, dto)
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);
    }
}
