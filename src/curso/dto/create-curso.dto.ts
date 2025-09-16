import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDate, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { CreateDisciplinaDto } from "src/disciplina/dto/create-disciplina.dto";

export class CreateCursoDto {

    @ApiProperty( { example: 'Engenharia de Software', description: 'Nome do curso' } )
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty( { example: 4000, description: 'Carga horaria do curso' } )
    @IsNumber()
    cargaHoraria: number;

    @ApiProperty( { example: '2024-08-01', description: 'Data de inicio do curso' } )
    @IsDate()
    @Type(() => Date)
    dataInicio: Date;

    @ApiProperty( { type: [CreateDisciplinaDto], description: 'Lista de disciplinas do curso' } )
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateDisciplinaDto)
    disciplinas: CreateDisciplinaDto[];
}
