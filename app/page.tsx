/* eslint-disable @next/next/no-img-element */
import MyNavbar from '@/components/navbar';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-black bg-opacity-45 backdrop-blur-md bg-repeat">
        <img src="/particles.min.svg" alt="particles" className="blur-sm opacity-20"></img>
      </div>
      <div className="relative">
        <MyNavbar />
        <Separator className="mb-12 bg-slate-300 opacity-10" />
        <div className="text-center my-12 mx-96 rounded-md bg-transparent border-solid border-1 min-h-screen">
          <h1 className="mx-48 text-white scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-7xl">
            Websites rapidos, acessiveis e seguros com Kuki.
          </h1>
        </div>
      </div>
    </div>
  );
}
