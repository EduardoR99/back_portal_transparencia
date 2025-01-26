-- CreateTable
CREATE TABLE "Empenho" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "unidade_gestora" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "especie" TEXT NOT NULL,
    "empenho" TEXT NOT NULL,
    "tipo_empenho" TEXT NOT NULL,
    "elemento_despesa" TEXT NOT NULL,
    "subtitulo" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "subfuncao" TEXT NOT NULL,
    "programa" TEXT NOT NULL,
    "fonte_recurso" TEXT NOT NULL,
    "grupo_despesa" TEXT NOT NULL,
    "documento_favorecido" TEXT NOT NULL,
    "nome_favorecido" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Empenho_pkey" PRIMARY KEY ("id")
);
