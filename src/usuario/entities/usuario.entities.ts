import { IsEmail } from "class-validator";
import { RegistroAgua } from "src/registro-agua/entities/registro-agua.entity";
import { UsuarioConfig } from "src/usuario-config/entities/usuarioconfig.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string

    @Column()
    @IsEmail()
    email: string;

    @Column()
    senha: string;

    @OneToMany(() => UsuarioConfig, (usuarioConfig) => usuarioConfig.usuario)
    usuarioConfig: UsuarioConfig;

    @OneToMany(() => RegistroAgua, (registroAgua) => registroAgua.usuario)
    registroAgua: RegistroAgua[];
}