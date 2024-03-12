/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookIcon } from 'mage-icons-react/stroke';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const MyNavbar = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-72 bg-transparent">
      <div className="">
        <Link href="/">
          <img
            src="/logo-h.min.svg"
            alt="Logo"
            className="h-12 hover:animate-pulse hover:animate-duration-1000 hover:animate-once"
          />
        </Link>
      </div>
      <div className="flex gap-6">
        <Link href="/" className="text-white hover:animate-pulse hover:animate-duration-700 hover:animate-once">
          Home
        </Link>
        <Link
          href="/blog"
          className="text-white text-l hover:animate-pulse hover:animate-duration-700 hover:animate-once">
          Blog
        </Link>
        <Link href="/contato" className="text-white hover:animate-pulse hover:animate-duration-700 hover:animate-once">
          Contato
        </Link>
        <Link href="/servicos" className="text-white hover:animate-pulse hover:animate-duration-700 hover:animate-once">
          Serviços
        </Link>
      </div>
      <div>
        <TooltipProvider>
          <Tooltip delayDuration={400}>
            <TooltipTrigger asChild>
              <Button
                className="w-44 text-white bg-transparent border-opacity-10 border-slate-300 hover:bg-transparent-300 hover:animate-pulse hover:animate-duration-700 hover:animate-once hover:text-white"
                variant="outline">
                <BookIcon className="mr-2 w-5" />
                Programa
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Para projetos Open Source e OSCs</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default MyNavbar;
