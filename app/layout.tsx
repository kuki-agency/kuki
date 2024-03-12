// LAYOUT.TSX
import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MyNavbar from '@/components/navbar'; // Update the import path as necessary
import { Separator } from '@/components/ui/separator'; // Update the import path as necessary
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kuki',
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-black bg-repeat bg-opacity-45 backdrop-blur-md">
          {/* <img src="/particles.min.svg" alt="particles" className="opacity-20 blur-sm"></img> */}
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
          <MyNavbar />
          <Separator className="mb-12 opacity-10 bg-slate-300" />
          {children}
        </div>
      </body>
    </html>
  );
}
