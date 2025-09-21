/*
  Warnings:

  - You are about to drop the column `descreption` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "descreption",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';
