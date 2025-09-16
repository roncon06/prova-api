import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDisciplinaDto {

    @ApiProperty( { example: 'Matemática', description: 'Nome da disciplina' } )
    @IsString()
    @IsNotEmpty()
    nome: string;
}
