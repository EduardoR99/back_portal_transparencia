import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from './prisma/prisma.service';

async function loadDataToDatabase(prisma: PrismaService) {
  const filePath = path.join(__dirname, '..', 'src', 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const empenho of data) {
    try {
      if (!empenho.ano || !empenho.mes || !empenho.unidade_gestora || !empenho.data || !empenho.especie || !empenho.empenho || !empenho.tipo_empenho || !empenho.elemento_despesa || !empenho.funcao || !empenho.subfuncao || !empenho.programa || !empenho.fonte_recurso || !empenho.grupo_despesa || !empenho.documento_favorecido || !empenho.nome_favorecido || !empenho.valor) {
        throw new Error('Dados incompletos');
      }
  
      empenho.data = new Date(empenho.data).toISOString();
  
      await prisma.empenho.create({ data: empenho });
    } catch (error) {
      console.error('Erro ao inserir empenho:', empenho);
      console.error(error);
    }
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Empenho API')
    .setDescription('API para gerenciar empenhos')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const prismaService = app.get(PrismaService);
  await loadDataToDatabase(prismaService);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();