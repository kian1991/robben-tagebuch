'use server';
import { eq, ilike, or } from 'drizzle-orm';
import { db } from '../../db/client';
import { entries, EntrySelect } from '../../db/schemas';
import { fakeLatency } from '@/lib/utils';

export const getEntries = async (query: string | undefined = undefined) => {
  let result: EntrySelect[];

  if (query)
    result = await db
      .select()
      .from(entries)
      .where(or(ilike(entries.content, `%${query}%`), ilike(entries.title, `%${query}%`)))
      .execute();
  else result = await db.select().from(entries).execute();

  return result;
};

export const getEntryById = async (id: string) => {
  // Fake Latenccy
  await fakeLatency();
  return await db.query.entries.findFirst({
    where: eq(entries.id, parseInt(id)),
  });
};
