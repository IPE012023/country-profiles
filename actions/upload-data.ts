// Assuming this is placed in a file like utils.ts within your app/api/uploadData directory

"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const uploadData = async () => {
  return "Data uploaded successfully";
};
