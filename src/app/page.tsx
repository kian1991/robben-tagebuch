import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { H1, Small } from 'shadcn-typography';

export default function Home() {
  return (
    <div className='mx-auto max-w-2xl flex flex-col items-center gap-3 px-6 pt-12'>
      <div className='relative w-fit h-fit'>
        <Image
          src={'https://cdn.pixabay.com/photo/2017/01/20/20/02/seal-1995811_1280.jpg'}
          width={250}
          height={200}
          alt='Süße Robbe'
          className='rounded'
        />
        <div
          className='bg-sky-600 w-[10px] h-[10px] absolute top-[30px] right-[90px]'
          style={{
            borderBottomRightRadius: '50em',
            borderBottomLeftRadius: '50em',
          }}></div>
      </div>
      <H1>Robben Tagebuch 1.2</H1>
      <Small>Dieses Tagebuch la li la la dient zum na na na </Small>

      <Button size={'sm'} variant={'outline'}>
        Zum Log
      </Button>
    </div>
  );
}
