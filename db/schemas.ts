import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { pgEnum, pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { z } from 'zod';
// declaring enum in database
export const wearherEnum = pgEnum('weather', ['cloudy', 'rain', 'sunny']);

export const entries = pgTable('entries', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  content: varchar('content', { length: 2048 }).notNull(),
  weather: wearherEnum('weather'),
  image: varchar('image', { length: 512 }).notNull(),
});

export const EntryInsertSchema = createInsertSchema(entries);
export const EntrySelectSchema = createSelectSchema(entries);

export type EntryInsert = z.infer<typeof EntryInsertSchema>;
export type EntrySelect = z.infer<typeof EntrySelectSchema>;
