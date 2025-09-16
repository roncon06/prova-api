import {IsOptional, IsString } from 'class-validator';


export class UpdateDisciplinaDto {
 
  @IsOptional() 
  @IsString()
  nome?: string;


}
