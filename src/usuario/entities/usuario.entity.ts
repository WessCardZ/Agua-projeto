import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RegistroAgua } from "src/registro-agua/entities/historico.entity";

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

    @OneToMany(() => RegistroAgua, (registroAgua) => registroAgua.usuario)
    registroAgua: RegistroAgua[];
}