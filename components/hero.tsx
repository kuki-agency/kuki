'use client';
import { ReactTyped } from 'react-typed';
import localFont from 'next/font/local';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Headset } from 'lucide-react';

const vagaRound = localFont({
  src: '../public/QTVagaRound-Bold.otf',
});

const MyHero = () => {
  return (
    <div>
      <div className={vagaRound.className}>
        <h1 className="mx-0 text-6xl tracking-tight text-foreground/80 lg:text-7xl">
          Websites{' '}
          <ReactTyped
            className="text-purple-400"
            strings={['rápidos', 'seguros', 'acessíveis']}
            typeSpeed={50}
            backSpeed={60}
            backDelay={3000}
            cursorChar="|"
            loop
          />
          {''}
        </h1>
        <h1 className="mx-0 mb-12 text-6xl tracking-tight text-foreground/80 lg:text-7xl">com a kuki.</h1>
      </div>
      <div className="grid justify-center place-content-center mx-16 my-12 text-center">
        <h4 className="mb-6 text-2xl font-semibold tracking-tight text-gray-300 scroll-m-20">Descubra a eficiência.</h4>
        <p className="text-xl text-gray-400">
          Tecnologia moderna e fórmula de desenvolvimento que garantem um lançamento ágil e seguro.
        </p>
      </div>
      <div className="flex gap-6 justify-center place-content-center mx-auto">
        <Button
          className="w-40 tracking-tight text-white bg-transparent border-opacity-10 border-slate-300 hover:bg-transparent-300 hover:animate-pulse hover:animate-duration-700 hover:animate-once hover:text-white"
          variant="outline">
          <Headset className="mr-2" />
          Consulte Gratis
        </Button>
        <Button
          className="w-40 tracking-tight text-black bg-purple-300 border-opacity-10 border-slate-300 hover:bg-transparent-300 hover:animate-pulse hover:animate-duration-700 hover:animate-once"
          variant="outline">
          <ShoppingBag className="mr-2" />
          Contrate
        </Button>
      </div>
    </div>
  );
};

export default MyHero;
