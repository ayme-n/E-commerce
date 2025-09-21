/*
  Warnings:

  - A unique constraint covering the columns `[UserID]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `UserID` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Cart" ADD COLUMN     "UserID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_UserID_key" ON "public"."Cart"("UserID");

-- AddForeignKey
ALTER TABLE "public"."Cart" ADD CONSTRAINT "Cart_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
