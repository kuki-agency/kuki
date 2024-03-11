/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const MyNavbar = () => {
  return (
    <div className="mx-96 bg-transparent flex justify-between items-center p-4">
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
    </div>
  );
};

export default MyNavbar;
