/*
  Warnings:

  - You are about to drop the column `ETY` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `RSP` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `years` on the `Country` table. All the data in the column will be lost.
  - Added the required column `ETY` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RSP` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_userId_fkey";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "ETY",
DROP COLUMN "RSP",
DROP COLUMN "userId",
DROP COLUMN "years";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ETY" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "RSP" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Index" (
    "id" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Index_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Index" ADD CONSTRAINT "Index_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("countryId") ON DELETE CASCADE ON UPDATE CASCADE;
