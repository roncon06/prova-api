import { Injectable } from '@nestjs/common';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Disciplina } from './entities/disciplina.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DisciplinaService {
  constructor(@InjectRepository(Disciplina)
  private disciplinaRepository: Repository<Disciplina>,)
  {}

  async create(createDisciplinaDto: CreateDisciplinaDto):Promise<Disciplina> {
    return await this.disciplinaRepository.save(createDisciplinaDto);
  }

  findAll(): Promise<Disciplina[]> {
    return this.disciplinaRepository.find();
  }

  async findOne(id: number): Promise<Disciplina> {
    const disciplina = await this.disciplinaRepository.findOne({ where: { id } });
    if (!disciplina) {
      throw new Error(`Disciplina com id ${id} nao encontrado`);
    }
    return disciplina;
  }

  async update(id: number, updateDisciplinaDto: UpdateDisciplinaDto): Promise<Disciplina> {
    await this.disciplinaRepository.update(id, updateDisciplinaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.disciplinaRepository.delete(id);
  }
}
