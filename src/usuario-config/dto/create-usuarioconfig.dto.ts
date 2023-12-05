import { IsMilitaryTime, IsNotEmpty } from "class-validator";

export class CreateUsuarioConfigOrUpdateDto {
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