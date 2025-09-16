import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiProperty } from '@nestjs/swagger';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  
  @Post()
  @ApiOperation({ summary: 'Cria um novo curso' })
  @ApiCreatedResponse({ description: 'Curso criado com sucesso.', type: CreateCursoDto })
  @ApiBadRequestResponse({ description: 'Dados inválidos.' })
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os cursos' })
  @ApiCreatedResponse({ description: 'Lista de cursos retornada com sucesso.', type: [CreateCursoDto] })
  @ApiBadRequestResponse({ description: 'Erro ao buscar cursos.' })
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um curso pelo ID' })
  @ApiCreatedResponse({ description: 'Curso retornado com sucesso.' })
  @ApiBadRequestResponse({ description: 'Curso não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(+id);
  }

  @Get(':cursoId/disciplinas')
  @ApiOperation({ summary: 'Retorna todas as disciplinas de um curso pelo ID do curso' })
  @ApiCreatedResponse({ description: 'Lista de disciplinas retornada com sucesso.' })
  @ApiBadRequestResponse({ description: 'Curso não encontrado.' })
  findAllDisciplinas(@Param('cursoId') cursoId: number) {
    return this.cursoService.findAllDisciplinas(cursoId);
  }


    @Patch(':id')
    @ApiOperation({ summary: 'Atualiza um curso pelo ID' })
    @ApiCreatedResponse({ description: 'Curso atualizado com sucesso.', type: UpdateCursoDto })
    @ApiBadRequestResponse({ description: 'Dados inválidos ou curso não encontrado.' })
    update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
      return this.cursoService.update(+id, updateCursoDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remove um curso pelo ID' })
    @ApiCreatedResponse({ description: 'Curso removido com sucesso.' })
    @ApiBadRequestResponse({ description: 'Curso não encontrado.' })
    remove(@Param('id') id: string) {
      return this.cursoService.remove(+id);
    }

    @Post(':cursoId/disciplina')
    @ApiOperation({ summary: 'Adiciona uma disciplina a um curso' })
    @ApiCreatedResponse({ description: 'Disciplina adicionada com sucesso.' })
    @ApiBadRequestResponse({ description: 'Curso não encontrado ou dados inválidos.' })
    addDisciplina(@Param('cursoId') cursoId: number, @Body() createDisciplinaDto: { nome: string },
    ) {
      return this.cursoService.addDisciplina(cursoId, createDisciplinaDto);
    }

    @Delete(':cursoId/disciplina/:disciplinaId')
    @ApiOperation({ summary: 'Remove uma disciplina de um curso' })
    @ApiCreatedResponse({ description: 'Disciplina removida com sucesso.' })
    @ApiBadRequestResponse({ description: 'Curso ou disciplina não encontrado.' })
    removeDisciplina(@Param('cursoId') cursoId: number, @Param('disciplinaId') disciplinaId: number) {
      return this.cursoService.removeDisciplina(cursoId, disciplinaId);
    }
}
