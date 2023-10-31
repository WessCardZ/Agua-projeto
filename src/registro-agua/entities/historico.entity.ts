import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RegistroAgua {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidadeML: number;

    @CreateDateColumn()
    dataHoraConsumo: Date;

}