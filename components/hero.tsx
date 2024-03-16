'use client';
import { ReactTyped } from 'react-typed';
import localFont from 'next/font/local';
import { ShoppingBag, Headset } from 'lucide-react';
import { MainButton } from '@/components/main-button';

const vagaRound = localFont({
  src: '../public/QTVagaRound-Bold.otf',
});

const Hero = () => {
  return (
    <div className="space-y-12">
      <div className={vagaRound.className}>
        <h1 className="mx-0 text-4xl tracking-tight text-foreground/80 lg:text-6xl">
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
        <h1 className="mx-0 text-4xl tracking-tight text-foreground/80 lg:text-6xl">com a kuki.</h1>
      </div>
      <div className="grid justify-center place-content-center text-center">
        <h4 className="text-xl font-semibold tracking-tight text-gray-300">Descubra a eficiência.</h4>
        <p className="text-lg text-gray-400">
          Tecnologia moderna e fórmula de desenvolvimento que garantem um lançamento ágil e seguro.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center place-content-center lg:flex-row">
        <MainButton>
          <Headset size={16} className="mr-2" />
          Consulte
        </MainButton>
        <MainButton className="text-black bg-purple-300 hover:text-black hover:animate-pulse hover:animate-duration-700 hover:animate-once">
          <ShoppingBag size={16} className="mr-2" />
          Contrate
        </MainButton>
      </div>
    </div>
  );
};

export default Hero;
