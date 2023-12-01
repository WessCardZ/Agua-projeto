import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { };

    findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    findById(id: number): Promise<Usuario | null> {
        return this.usuarioRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);
    }
}
