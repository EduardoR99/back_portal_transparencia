import { PartialType } from '@nestjs/swagger';
import { CreateEmpenhoDto } from './create-empenho.dto'; 

export class UpdateEmpenhoDto extends PartialType(CreateEmpenhoDto) {}