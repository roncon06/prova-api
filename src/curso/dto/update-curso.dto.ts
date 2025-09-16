import { Type } from 'class-transformer';
import { IsDate, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCursoDto {

  @IsOptional() 
  @IsString()
  nome?: string;

  @IsOptional() 
  @IsNumber()
  cargaHoraria?: number;

  @IsOptional()
  @Type(() => Date) 
  @IsDate()         
  dataInicio?: Date;
  
}