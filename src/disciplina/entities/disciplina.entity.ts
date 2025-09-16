import { Curso } from "src/curso/entities/curso.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('disciplinas')
export class Disciplina {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @ManyToOne(() => Curso, (curso) => curso.disciplinas, { onDelete: 'CASCADE' })
    curso: Curso;


}
