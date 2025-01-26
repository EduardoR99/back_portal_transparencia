import { Module } from '@nestjs/common';
import { EmpenhoService } from './empenho.service';
import { EmpenhoController } from './empenho.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmpenhoController],
  providers: [EmpenhoService],
})
export class EmpenhoModule {}