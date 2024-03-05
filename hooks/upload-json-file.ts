import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function uploadData() {
  const dataFilePath = path.join("C:\\Users\\JensHerold\\OneDrive - IPE Institut für Politikevaluation\\Dokumente\\Taskforce\\country_profiles\\data", 'south-korea.json');
  const jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

  const { Country: Countries, Products, Indexes, VAT: VATs } = jsonData;

  // Upload Countries
  for (const country of Countries) {
    await prisma.country.create({
      data: country,
    });
  }

  // Upload Products and their Yearly Data
  for (const product of Products) {
    await prisma.product.create({
      data: {
        ...product,
        yearlyData: {
          create: product.yearlyData,
        },
      },
    });
  }

  // Upload Indexes and their Yearly Data
  for (const index of Indexes) {
    await prisma.index.create({
      data: {
        ...index,
        yearlyData: {
          create: index.yearlyData,
        },
      },
    });
  }

  // Upload VATs and their Yearly Data
  for (const vat of VATs) {
    await prisma.vAT.create({
      data: {
        ...vat,
        yearlyVATData: {
          create: vat.yearlyVATData,
        },
      },
    });
  }
}

uploadData()
  .then(() => {
    console.log('Data upload complete.');
  })
  .catch((e) => {
    console.error('Error uploading data:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
