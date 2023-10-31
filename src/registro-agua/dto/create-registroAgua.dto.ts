import { IsNotEmpty, IsPositive } from "class-validator";


export class CreateRegistroAguaOrUpdateDto {
    @IsPositive()
    id: number;

    @IsNotEmpty()
    quantidadeML: number;

    @IsNotEmpty()
    dataHoraConsumo: Date
}