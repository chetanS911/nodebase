// nodebase > prisma.config.ts

// 1. IMPORT DOTENV AND CALL CONFIG() TO LOAD YOUR .ENV FILE
import 'dotenv/config'; // Use this for side-effect loading

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // 2. THIS NOW ACCESSES THE VARIABLE LOADED BY DOTENV
    url: process.env.DATABASE_URL as string,
  },
});