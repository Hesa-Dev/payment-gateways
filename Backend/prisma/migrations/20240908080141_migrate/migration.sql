/*
  Warnings:

  - You are about to drop the column `nome` on the `categorias` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `categorias` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `produtos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `categorias` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "categorias_nome_key";

-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categorias_name_key" ON "categorias"("name");

-- CreateIndex
CREATE UNIQUE INDEX "produtos_name_key" ON "produtos"("name");
