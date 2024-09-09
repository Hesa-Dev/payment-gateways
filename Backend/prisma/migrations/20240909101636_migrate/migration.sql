/*
  Warnings:

  - Added the required column `total` to the `vendas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vendas" ADD COLUMN     "adress" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;
