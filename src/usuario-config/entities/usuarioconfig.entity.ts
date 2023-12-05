import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RegistroAgua } from "src/registro-agua/entities/registro-agua.entity";
import { Usuario } from "src/usuario/entities/usuario.entities";


@Entity()
export class UsuarioConfig {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pesoAtual: number;

    @Column({ type: 'time without time zone' })
    horarioAcordar: string;

    @Column({ type: 'time without time zone' })
    horarioDormir: string;

    @Column()
    metaDiaria: number

    @ManyToOne(() => Usuario, (usuario) => usuario.usuarioConfig)
    usuario: Usuario;
}