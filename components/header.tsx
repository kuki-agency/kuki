/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeartHandshake } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Nav from '@/components/nav';
import Burger from '@/components/burger';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-6 bg-transparent lg:mx-56 xl:mx-72">
      <div className="">
        <Link href="/">
          <img
            src="/logo-h.min.svg"
            alt="Logo"
            className="h-10 lg:h-8 xl:h-10 hover:animate-pulse hover:animate-duration-1000 hover:animate-once"
          />
        </Link>
      </div>
      <div>
        <Nav />
      </div>
      <div className="hidden lg:block 2xl:w-44">
        <TooltipProvider>
          <Tooltip delayDuration={400}>
            <TooltipTrigger asChild>
              <Button
                className="w-40 text-sm tracking-tight bg-transparent border-opacity-10 border-slate-300 hover:bg-transparent-300 hover:animate-pulse hover:animate-duration-700 hover:animate-once hover:text-white"
                variant="outline">
                <HeartHandshake className="mr-2" />
                Programa
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Para projetos Open Source e OSCs</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="lg:hidden">
        <Burger />
      </div>
    </div>
  );
};

export default Header;
