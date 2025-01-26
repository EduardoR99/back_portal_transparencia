import { IsNotEmpty, IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateEmpenhoDto {
  @IsNotEmpty()
  @IsString()
  ano: string;

  @IsNotEmpty()
  @IsString()
  mes: string;

  @IsNotEmpty()
  @IsString()
  unidade_gestora: string;

  @IsNotEmpty()
  @IsDateString()
  data: string;

  @IsNotEmpty()
  @IsString()
  especie: string;

  @IsNotEmpty()
  @IsString()
  empenho: string;

  @IsNotEmpty()
  @IsString()
  tipo_empenho: string;

  @IsNotEmpty()
  @IsString()
  elemento_despesa: string;

  @IsOptional()
  @IsString()
  subtitulo: string = '';

  @IsNotEmpty()
  @IsString()
  funcao: string;

  @IsNotEmpty()
  @IsString()
  subfuncao: string;

  @IsNotEmpty()
  @IsString()
  programa: string;

  @IsNotEmpty()
  @IsString()
  fonte_recurso: string;

  @IsNotEmpty()
  @IsString()
  grupo_despesa: string;

  @IsNotEmpty()
  @IsString()
  documento_favorecido: string;

  @IsNotEmpty()
  @IsString()
  nome_favorecido: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}