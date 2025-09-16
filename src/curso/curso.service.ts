import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { Disciplina } from 'src/disciplina/entities/disciplina.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
    @InjectRepository(Disciplina)
    private readonly disciplinaRepository: Repository<Disciplina>,  
  ) {}
  

  async create(createCursoDto: CreateCursoDto):Promise<Curso> {
    const novoCurso = this.cursoRepository.create(createCursoDto);
    return await this.cursoRepository.save(novoCurso);; 
  }

  findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

   async findOne(id: number): Promise<Curso> {
    const curso = await this.cursoRepository.findOne({ where: { id } });
    if (!curso) {
      throw new NotFoundException(`Curso com id ${id} nao encontrado`);
    } 
    return curso;
  }

  async findAllDisciplinas(cursoId: number): Promise<Disciplina[]> {
    const curso = await this.findOne(cursoId);
    return curso.disciplinas;
  }


  async update(id: number, updateCursoDto: UpdateCursoDto): Promise<Curso> {
    const curso = await this.cursoRepository.preload({
      id,
      ...updateCursoDto,
    });
    if (!curso) {
      throw new NotFoundException(`Curso com ID #${id} não encontrado.`);
    }
    return this.cursoRepository.save(curso)
  }

  async remove(id: number): Promise<void> {
    await this.cursoRepository.delete(id);
  }

  async addDisciplina(cursoId: number, createDisciplinaDto: { nome: string },): Promise<Disciplina> {
    const curso = await this.findOne(cursoId);
    
    const novaDisciplina = this.disciplinaRepository.create({
      ...createDisciplinaDto,
      curso, 
    });

    return this.disciplinaRepository.save(novaDisciplina);
  }


  async removeDisciplina(cursoId: number,disciplinaId: number,): Promise<void> {
    await this.findOne(cursoId);

    const result = await this.disciplinaRepository.delete({ id: disciplinaId, curso: { id: cursoId } });

    if (result.affected === 0) {
      throw new NotFoundException(
        `Disciplina com ID #${disciplinaId} não encontrada no curso #${cursoId}.`,
      );
    }
  }
 
  
}
