import { Disciplina } from "src/disciplina/entities/disciplina.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cursos')
export class Curso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cargaHoraria: number;

    @Column({ type: 'date' })
    dataInicio: Date;

    @OneToMany(() => Disciplina, (disciplina) => disciplina.curso, {
    cascade: true,
    eager: true,
  })
    disciplinas: Disciplina[];


}
