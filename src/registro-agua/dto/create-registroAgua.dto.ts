import { IsNotEmpty } from "class-validator";


export class CreateRegistroAguaOrUpdateDto {
    @IsNotEmpty()
    quantidadeML: number;
}