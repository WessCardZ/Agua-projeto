import { IsNotEmpty } from "class-validator";

export class AutenticarUsuarioDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    senha: string;
}