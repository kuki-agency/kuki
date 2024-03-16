// LAYOUT.TSX
import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header'; // Update the import path as necessary
import { Separator } from '@/components/ui/separator'; // Update the import path as necessary
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kuki Web Agency',
  description: 'Websites rápidos, acessíveis e seguros com Kuki.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} relative min-h-screen`}>
        <div className="absolute inset-0 bg-gradient-to-b from-purpleGradient to-slateGradient">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={1.6}
            maxSize={4.4}
            particleDensity={5}
            className="w-full h-full opacity-20"
            particleColor="#ffffff"
          />
        </div>
        <div className="relative">
          <Header />
          <Separator className="opacity-10 bg-slate-300" />
          <div className="mx-4 mt-12 min-h-full lg:mx-72">{children}</div>
        </div>
      </body>
    </html>
  );
}
