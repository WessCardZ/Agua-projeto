import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RegistroAgua {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidadeML: number;

    @Column()
    dataHoraConsumo: Date;

}