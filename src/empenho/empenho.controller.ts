import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpenhoService } from './empenho.service';
import { CreateEmpenhoDto } from './dto/create-empenho.dto';
import { UpdateEmpenhoDto } from './dto/update-empenho.dto';

@Controller('empenho')
export class EmpenhoController {
  constructor(private readonly empenhoService: EmpenhoService) {}

  @Post()
  create(@Body() createEmpenhoDto: CreateEmpenhoDto) {
    return this.empenhoService.create(createEmpenhoDto);
  }

  @Get()
  findAll() {
    return this.empenhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empenhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpenhoDto: UpdateEmpenhoDto) {
    return this.empenhoService.update(+id, updateEmpenhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empenhoService.remove(+id);
  }
}