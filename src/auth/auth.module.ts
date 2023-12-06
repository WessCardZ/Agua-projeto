import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { UsuarioController } from 'src/usuario/usuario.controller';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsuarioModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
