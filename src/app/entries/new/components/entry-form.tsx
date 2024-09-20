'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Form Related
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { startTransition } from 'react';
import { db } from '../../../../../db/client';
import { entries } from '../../../../../db/schemas';

const NewEntryFormSchema = z.object({
  title: z.string().min(5, 'Mindestens 5 Buchstaben').max(128, 'Maximal 128 Buchstaben'),
  seals: z.coerce.number(),
  content: z
    .string()
    .min(10, 'Mindestens 10 Buchstaben')
    .max(2048, 'Maximal 2048 Buchstaben'),
  image: z.string().url('Das ist kein gültiges URL FROMAT!!!'),
  weather: z.enum(['rain', 'sunny', 'cloudy']),
});

export default function EntryForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof NewEntryFormSchema>>({
    resolver: zodResolver(NewEntryFormSchema),
    defaultValues: {
      title: '',
      seals: undefined,
      content: '',
      image: '',
      weather: undefined,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof NewEntryFormSchema>) {
    startTransition(async () => {});
  }

  return (
    <div className='mx-auto max-w-2xl flex flex-col items-center gap-3 px-6 pt-12'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=''>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='seals'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anzahl Robben</FormLabel>
                <FormControl>
                  <Input type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Inhalt</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={8} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bild</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='weather'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wetter</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(val) => {
                      field.onChange(val);
                    }}
                    value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder='Wetter wählen' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='rain'>🌧️</SelectItem>
                      <SelectItem value='sunny'>☀️</SelectItem>
                      <SelectItem value='cloudy'>☁️</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Speichern</Button>
        </form>
      </Form>
    </div>
  );
}
