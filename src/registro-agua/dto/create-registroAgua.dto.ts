import { IsNotEmpty, IsPositive } from "class-validator";


export class CreateRegistroAguaDto {
    @IsPositive()
    id: number;

    @IsNotEmpty()
    quantidadeML: number;

    @IsNotEmpty()
    dataHoraConsumo: Date
}