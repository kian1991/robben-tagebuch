import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './db/schemas.ts',
  out: './drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.POSTGRES_URL || '',
  },
});
