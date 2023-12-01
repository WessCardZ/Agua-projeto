import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pesoAtual: number;

    @Column()
    horarioAcordar: Date;

    @Column()
    horarioDormir: Date;

    @Column()
    metaDiaria: number
}