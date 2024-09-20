'use client';

import { Input, InputProps } from '@/components/ui/input';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Search({
  queryKey = 'query',
  ...props
}: InputProps & { queryKey?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleInput = (input: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (input === '') params.delete(queryKey);
    else params.set(queryKey, input);
    router.push(`${pathname}?${params}`);
  };

  return (
    <Input
      placeholder='Search'
      onChange={(e) => handleInput(e.target.value)}
      value={searchParams.get(queryKey) || ''}
      {...props}
    />
  );
}
