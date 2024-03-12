'use client';
import { ReactTyped } from 'react-typed';
import localFont from 'next/font/local';
import { Button } from '@/components/ui/button';
import { ShoppingBagIcon, PhoneIcon } from 'mage-icons-react/stroke';

const vagaRound = localFont({
  src: '../public/QTVagaRound-Bold.otf',
});

const MyHero = () => {
  return (
    <div>
      <div className={vagaRound.className}>
        <h1 className="mx-28 mb-6 text-7xl tracking-tight text-gray-300 lg:text-7xl">
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
          com a kuki.
        </h1>
      </div>
      <div className="grid justify-center place-content-center mx-auto my-6 w-1/2 text-center">
        <h4 className="mb-6 text-2xl font-semibold tracking-tight text-gray-300 scroll-m-20">Descubra a eficiência.</h4>
        <p className="text-xl text-gray-400">
          Websites e web apps de alto desempenho. Nossa tecnologia moderna e fórmula de desenvolvimento garantem um
          lançamento ágil e seguro, sem a necessidade de conhecimento técnico.
        </p>
      </div>
      <div className="flex gap-6 justify-center place-content-center mx-auto">
        <Button
          className="w-44 text-white bg-transparent border-opacity-10 border-slate-300 hover:bg-transparent-300 hover:animate-pulse hover:animate-duration-700 hover:animate-once hover:text-white"
          variant="outline">
          <PhoneIcon className="mr-2 w-5" />
          Consulte Gratis
        </Button>
        <Button
          className="w-44 text-black bg-purple-300 border-opacity-10 border-slate-300 hover:bg-transparent-300 hover:animate-pulse hover:animate-duration-700 hover:animate-once"
          variant="outline">
          <ShoppingBagIcon className="mr-2 w-5" />
          Contrate
        </Button>
      </div>
    </div>
  );
};

export default MyHero;
