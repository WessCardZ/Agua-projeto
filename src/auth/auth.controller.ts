import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AutenticarUsuarioDto } from './dto/auth.usuario.dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    logar(@Body() dto: AutenticarUsuarioDto) {
        return this.authService.login(dto.email, dto.senha)
    }
}
