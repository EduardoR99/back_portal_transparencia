import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Empenho } from '@prisma/client';
import { CreateEmpenhoDto } from './dto/create-empenho.dto';
import { UpdateEmpenhoDto } from './dto/update-empenho.dto';

@Injectable()
export class EmpenhoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEmpenhoDto): Promise<Empenho> {
    return this.prisma.empenho.create({ data });
  }

  async findAll(): Promise<Empenho[]> {
    return this.prisma.empenho.findMany();
  }

  async findOne(id: number): Promise<Empenho | null> {
    return this.prisma.empenho.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateEmpenhoDto): Promise<Empenho> {
    return this.prisma.empenho.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Empenho> {
    return this.prisma.empenho.delete({ where: { id } });
  }
}