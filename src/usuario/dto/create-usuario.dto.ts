import { IsNotEmpty } from "class-validator";

export class CreateUsuarioOrUpdateDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    nome: string

    @IsNotEmpty()
    senha: string;
}