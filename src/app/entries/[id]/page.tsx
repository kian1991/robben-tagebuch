import { getEntries, getEntryById } from '@/db/helper';

export async function generateStaticParams() {
  const entries = await getEntries();

  return entries.map((entry) => ({
    id: entry.id.toString(),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const entry = await getEntryById(params.id);

  return (
    <div className='mx-auto max-w-2xl p-5 mt-12 shadow rounded'>
      <img src={entry?.image} alt='cute seal' />
    </div>
  );
}
