import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { EntrySelect } from '../../../../db/schemas';
import Link from 'next/link';

type Props = {
  entries: EntrySelect[];
};

const weatherIcons = {
  cloudy: '☁️',
  rain: '🌧',
  sunny: '☀️',
};

export const EntryTable = ({ entries }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableHead></TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Preview</TableHead>
      </TableHeader>
      <TableBody>
        {entries.map((entry) => (
          <Link href={`/entries/${entry.id}`} key={entry.id} className='contents'>
            <TableRow>
              <TableCell>{weatherIcons[entry.weather!]}</TableCell>
              <TableCell>{entry.title}</TableCell>
              <TableCell>{entry.content.slice(0, 30) + '...'}</TableCell>
            </TableRow>
          </Link>
        ))}
      </TableBody>
    </Table>
  );
};
