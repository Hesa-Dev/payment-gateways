/*
  Warnings:

  - Made the column `description` on table `produtos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "updatedAt" TEXT,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL;
