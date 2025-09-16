import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('disciplina')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna todas as disciplinas' })
  @ApiCreatedResponse({ description: 'Lista de disciplinas retornada com sucesso.', type: [CreateDisciplinaDto] })
  @ApiBadRequestResponse({ description: 'Erro ao buscar disciplinas.' })
  findAll() {
    return this.disciplinaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma disciplina pelo ID' })
  @ApiCreatedResponse({ description: 'Disciplina retornada com sucesso.' })
  @ApiBadRequestResponse({ description: 'Disciplina não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.disciplinaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma disciplina pelo ID' })
  @ApiCreatedResponse({ description: 'Disciplina atualizada com sucesso.', type: UpdateDisciplinaDto })
  @ApiBadRequestResponse({ description: 'Dados inválidos ou disciplina não encontrada.' })
  update(@Param('id') id: string, @Body() updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinaService.update(+id, updateDisciplinaDto);
  }


}
