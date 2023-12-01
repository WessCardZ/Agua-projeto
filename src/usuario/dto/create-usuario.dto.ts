import { IsNotEmpty } from "class-validator";

export class CreateUsuarioOrUpdateDto {
    @IsNotEmpty()
    pesoAtual: number;

    @IsNotEmpty()
    horarioAcordar: Date;

    @IsNotEmpty()
    horarioDormir: Date;

    @IsNotEmpty()
    metaDiaria: number
}