import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { pgEnum, pgTable, serial, varchar } from 'drizzle-orm/pg-core';
// declaring enum in database
export const wearherEnum = pgEnum('weather', ['cloudy', 'rain', 'sunny']);

export const entries = pgTable('entries', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }),
  content: varchar('content', { length: 2048 }),
  weather: wearherEnum('weather'),
  image: varchar('image', { length: 128 }),
});

export const EntryInsertSchema = createInsertSchema(entries);
export const EntrySelectSchema = createSelectSchema(entries);
