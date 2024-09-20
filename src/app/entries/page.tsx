import { notFound } from 'next/navigation';
import { EntryTable } from './components/entry-table';
import { H2 } from 'shadcn-typography';
import { getEntries } from '@/db/helper';
import Search from '@/components/search/search-input';

export default async function EntryPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const result = await getEntries(searchParams.q || undefined);
  if (!result) notFound();
  return (
    <div className='mx-auto max-w-2xl p-5 mt-12 shadow rounded'>
      <div className='w-full flex justify-between'>
        <H2>Übersicht</H2>
        <Search className='w-[300px]' />
      </div>
      <EntryTable entries={result} />
    </div>
  );
}
