import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Clock, Baby, Youtube, Headset, Phone } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { games, genreLabels, platformLabels, type Game } from '@/lib/games-data';
import { site } from '@/lib/site';
import { plural } from '@/lib/utils';

/**
 * Обложка страницы игры: на телефоне — широкая 460×215, с планшета — вертикальная 4:5,
 * соразмерная колонке с описанием. Разные картинки под ширину экрана — через <picture>.
 */
function GameCover({ game }: { game: Game }) {
  if (!game.image) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/40 via-slate-900 to-violet-900/40">
        <Headset className="w-12 h-12 text-cyan-400/60" />
      </div>
    );
  }
  if (!game.cover) {
    return (
      <Image
        src={game.image}
        alt={game.title}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }

  const tallSizes = '(min-width: 1024px) 444px, 45vw';
  const {
    props: { srcSet: tallSrcSet },
  } = getImageProps({ src: game.cover, alt: game.title, width: 600, height: 750, sizes: tallSizes });
  const {
    props: { srcSet: wideSrcSet, ...wideProps },
  } = getImageProps({
    src: game.image,
    alt: game.title,
    width: 460,
    height: 215,
    sizes: '100vw',
    loading: 'eager',
    fetchPriority: 'high',
  });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={tallSrcSet} sizes={tallSizes} />
      <source srcSet={wideSrcSet} sizes="100vw" />
      <img {...wideProps} className="absolute inset-0 h-full w-full object-cover" />
    </picture>
  );
}

/** Каждая игра — отдельная статическая страница: так её видит поиск. */
export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

function findGame(slug: string) {
  return games.find((g) => g.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = findGame(slug);
  if (!game) return {};

  // Описание для сниппета: обрезаем по границе предложения, чтобы не рвать текст.
  const short = game.description.length > 150
    ? game.description.slice(0, 150).replace(/[\s,;:—-]+\S*$/, '') + '…'
    : game.description;

  return {
    title: `${game.title} — играть в VR-клубе ART-VR, Омск`,
    description: `${short} Играйте в ${game.title} в клубе виртуальной реальности ART-VR на ул. 10 лет Октября, 40. Запись: ${site.phone}.`,
    alternates: { canonical: `${site.url}/games/${game.slug}` },
    openGraph: {
      title: `${game.title} в VR-клубе ART-VR`,
      description: short,
      type: 'article',
      locale: 'ru_RU',
      siteName: 'ART-VR',
      url: `${site.url}/games/${game.slug}`,
      images: game.image ? [{ url: game.image }] : undefined,
    },
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = findGame(slug);
  if (!game) notFound();

  const related = games
    .filter((g) => g.genre === game.genre && g.slug !== game.slug)
    .slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoGame',
        name: game.title,
        description: game.description,
        genre: genreLabels[game.genre],
        image: game.image ? `${site.url}${game.image}` : undefined,
        gamePlatform: game.platforms.map((p) => platformLabels[p]),
        playMode: game.maxPlayers > 1 ? 'CoOp' : 'SinglePlayer',
        url: `${site.url}/games/${game.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Каталог игр', item: `${site.url}/games` },
          { '@type': 'ListItem', position: 3, name: game.title },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-8 md:px-12">
          <nav aria-label="Хлебные крошки" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/games" className="hover:text-white transition-colors">
                  Каталог игр
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">{game.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Контейнер задаёт пропорции обложки и не растягивается по высоте текста. */}
            <div
              className={`relative aspect-[460/215] ${game.cover ? 'md:aspect-[4/5]' : ''} md:self-start rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-900`}
            >
              <GameCover game={game} />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-4">
                {genreLabels[game.genre]}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-5">{game.title}</h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {game.players && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-300 bg-slate-900/60 border border-white/10 rounded-lg px-3 py-1.5">
                    <Users className="w-4 h-4 text-cyan-400" />
                    {game.players}{' '}
                    {plural(Number(game.players.match(/\d+/g)?.pop() ?? 0), 'игрок', 'игрока', 'игроков')}
                  </span>
                )}
                {game.age && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-300 bg-slate-900/60 border border-white/10 rounded-lg px-3 py-1.5">
                    <Baby className="w-4 h-4 text-violet-400" />
                    от {game.age} лет
                  </span>
                )}
                {game.playtime && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-300 bg-slate-900/60 border border-white/10 rounded-lg px-3 py-1.5">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    {game.playtime} мин
                  </span>
                )}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{game.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {game.platforms.map((p) => (
                  <span
                    key={p}
                    className="text-xs text-gray-400 border border-white/10 rounded-md px-2.5 py-1"
                  >
                    {platformLabels[p]}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={site.phoneHref}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/40 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Записаться на игру
                </a>
                {game.youtube && (
                  <a
                    href={game.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Youtube className="w-4 h-4 text-violet-300" />
                    Смотреть геймплей
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-2xl p-6 mb-12">
            <p className="text-gray-300">
              Играем на ул. 10 лет Октября, 40 в Омске: 10 игровых зон, беспроводные шлемы Meta
              Quest 3. Игру можно поменять прямо во время сеанса — администратор запустит и объяснит
              управление. Запись по телефону{' '}
              <a href={site.phoneHref} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {site.phone}
              </a>
              .
            </p>
          </div>

          {related.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Ещё в разделе «{genreLabels[game.genre]}»
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/games/${g.slug}`}
                    className="group block rounded-xl overflow-hidden border border-cyan-500/20 hover:border-violet-500/50 transition-all bg-slate-900"
                  >
                    <div className="relative aspect-[460/215] bg-slate-900">
                      {g.image ? (
                        <Image
                          src={g.image}
                          alt={g.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/40 to-violet-900/40">
                          <Headset className="w-7 h-7 text-cyan-400/60" />
                        </div>
                      )}
                    </div>
                    <p className="p-3 text-sm text-white font-medium">{g.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Весь каталог игр
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
