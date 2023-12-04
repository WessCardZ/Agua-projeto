import { IsMilitaryTime, IsNotEmpty } from "class-validator";

export class CreateUsuarioOrUpdateDto {
    @IsNotEmpty()
    pesoAtual: number;

    @IsNotEmpty()
    @IsMilitaryTime()
    horarioAcordar: string;

    @IsNotEmpty()
    @IsMilitaryTime()
    horarioDormir: string;

    @IsNotEmpty()
    metaDiaria: number
}