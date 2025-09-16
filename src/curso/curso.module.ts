import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { Curso } from './entities/curso.entity';
import { Disciplina } from 'src/disciplina/entities/disciplina.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Curso, Disciplina])],
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
