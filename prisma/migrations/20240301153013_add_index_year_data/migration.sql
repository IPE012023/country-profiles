/*
  Warnings:

  - You are about to drop the column `value` on the `Index` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Index` table. All the data in the column will be lost.
  - You are about to drop the column `ETY` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `RSP` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Index" DROP COLUMN "value",
DROP COLUMN "year";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ETY",
DROP COLUMN "RSP",
DROP COLUMN "year";

-- CreateTable
CREATE TABLE "ProductYearData" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "RSP" DOUBLE PRECISION NOT NULL,
    "ETY" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProductYearData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndexYearData" (
    "id" TEXT NOT NULL,
    "indexId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "IndexYearData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductYearData" ADD CONSTRAINT "ProductYearData_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndexYearData" ADD CONSTRAINT "IndexYearData_indexId_fkey" FOREIGN KEY ("indexId") REFERENCES "Index"("id") ON DELETE CASCADE ON UPDATE CASCADE;
