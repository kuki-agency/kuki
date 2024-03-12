/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MyNavbar = () => {
  return (
    <div className="mx-72 bg-transparent flex justify-between items-center p-4">
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
        <Button
          className="border-slate-300 border-opacity-10 bg-transparent text-white hover:bg-transparent-300 hover:animate-pulse hover:animate-duration-700 hover:animate-once hover:text-white"
          variant="outline">
          Fazer orçamento
        </Button>
      </div>
    </div>
  );
};

export default MyNavbar;
