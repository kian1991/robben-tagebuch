import { EntryInsertSchema } from '@/db/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function Page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof EntryInsertSchema>>({
    resolver: zodResolver(EntryInsertSchema),
    defaultValues: {
      title: '',
      content: '',
      image: '',
      weather: 'cloudy',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof EntryInsertSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='mx-auto max-w-2xl flex flex-col items-center gap-3 px-6 pt-12'>
      <span>form...</span>
    </div>
  );
}
