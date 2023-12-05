import { UsuarioConfig } from "src/usuario-config/entities/usuarioconfig.entity";
import { Usuario } from "src/usuario/entities/usuario.entities";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RegistroAgua {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidadeML: number;

    @CreateDateColumn()
    dataHoraConsumo: Date;

    @ManyToOne(() => Usuario, (usuario) => usuario.registroAgua)
    usuario: Usuario
}