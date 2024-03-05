-- CreateTable
CREATE TABLE "VAT" (
    "id" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "VAT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VATYearData" (
    "id" TEXT NOT NULL,
    "vatId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "nom_value" DOUBLE PRECISION NOT NULL,
    "eff_value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "VATYearData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VAT" ADD CONSTRAINT "VAT_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("countryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VATYearData" ADD CONSTRAINT "VATYearData_vatId_fkey" FOREIGN KEY ("vatId") REFERENCES "VAT"("id") ON DELETE CASCADE ON UPDATE CASCADE;
