import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}
  

  async create(createCursoDto: CreateCursoDto):Promise<Curso> {
    const curso = this.cursoRepository.create(createCursoDto);
    return await this.cursoRepository.save(curso);; 
  }

  findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

   async findOne(id: number): Promise<Curso> {
    const curso = await this.cursoRepository.findOne({ where: { id } });
    if (!curso) {
      throw new Error(`Curso with ID ${id} not found`);
    } 
    return curso;
  }

  async update(id: number, updateCursoDto: CreateCursoDto): Promise<Curso> {
    await this.cursoRepository.update(id, updateCursoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cursoRepository.delete(id);
  }

 
  
}
