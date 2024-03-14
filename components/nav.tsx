/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden gap-4 lg:flex lg:text-sm">
      <Link
        href="/"
        className={cn(
          'text-md 2xl:text-lg transition-colors hover:animate-pulse hover:animate-duration-700 hover:animate-once',
          pathname === '/' ? 'text-foreground' : 'text-foreground/60',
        )}>
        Home
      </Link>
      <Link
        href="/blog"
        className={cn(
          'text-md 2xl:text-lg transition-colors hover:animate-pulse hover:animate-duration-700 hover:animate-once',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60',
        )}>
        Blog
      </Link>
      <Link
        href="/contato"
        className={cn(
          'text-md 2xl:text-lg transition-colors hover:animate-pulse hover:animate-duration-700 hover:animate-once',
          pathname === '/contato' ? 'text-foreground' : 'text-foreground/60',
        )}>
        Contato
      </Link>
      <Link
        href="/servicos"
        className={cn(
          'text-md 2xl:text-lg transition-colors hover:animate-pulse hover:animate-duration-700 hover:animate-once',
          pathname === '/servicos' ? 'text-foreground' : 'text-foreground/60',
        )}>
        Serviços
      </Link>
    </div>
  );
};

export default Nav;
