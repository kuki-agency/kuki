/* eslint-disable @next/next/no-img-element */
import MyHero from '@/components/hero';

export default function Home() {
  return (
    <div className="mx-16 mt-24 mb-12 min-h-full text-center bg-transparent rounded-md border-solid xl:mx-72 border-1">
      <MyHero />
    </div>
  );
}
