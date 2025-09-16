import { Curso } from "src/curso/entities/curso.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('disciplinas')
export class Disciplina {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToOne(() => Curso, curso => curso.id)
    curso: Curso;


}
