import { IsNotEmpty, IsPositive } from "class-validator";


export class CreateRegistroAguaOrUpdateDto {
    @IsNotEmpty()
    quantidadeML: number;

    @IsNotEmpty()
    dataHoraConsumo: Date
}