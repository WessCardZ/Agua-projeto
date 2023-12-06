import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuarioService) { }

    async login(email: string, pass: string): Promise<any> {
        const usuario = await this.usuarioService.findOne(email)
        if (usuario?.senha !== pass) {
            throw new UnauthorizedException();
        }
        const { senha, ...result } = usuario;
        return result;
    }
}
