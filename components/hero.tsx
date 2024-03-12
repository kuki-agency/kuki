import localFont from 'next/font/local';

const vagaRound = localFont({
  src: '../public/QTVagaRound-Bold.otf',
});

const MyHero = () => {
  return (
    <div className={vagaRound.className}>
      <h1 className="mx-48 text-white scroll-m-20 text-8xl tracking-tight lg:text-8xl">
        Websites rápidos, acessíveis e seguros com kuki.
      </h1>
    </div>
  );
};

export default MyHero;
