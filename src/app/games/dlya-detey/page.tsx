import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GameCard } from '@/components/sections/games/GameCard';
import { games } from '@/lib/games-data';
import { site } from '@/lib/site';
import { plural } from '@/lib/utils';

// Игры для детей: подборка из каталога по возрастному рейтингу (до 8 лет включительно).
const kidsGames = games
  .filter((g) => Number(g.age) <= 8)
  .sort((a, b) => b.popularity - a.popularity);

const total = kidsGames.length;
const gamesWord = plural(total, 'игра', 'игры', 'игр');

export const metadata: Metadata = {
  title: 'VR-игры для детей в Омске — каталог клуба ART-VR',
  description:
    `Игры в виртуальной реальности для детей от 6 лет в Омске: спокойные, весёлые и командные — ${total} ${gamesWord} с подбором по возрасту, описаниями и роликами. VR-клуб ART-VR, ул. 10 лет Октября, 40.`,
  alternates: { canonical: `${site.url}/games/dlya-detey` },
  openGraph: {
    title: 'VR-игры для детей — VR-клуб ART-VR, Омск',
    description: 'Спокойные, весёлые и командные VR-игры для детей от 6 лет. Подбор по возрасту.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ART-VR',
    url: `${site.url}/games/dlya-detey`,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Каталог игр', item: `${site.url}/games` },
    { '@type': 'ListItem', position: 3, name: 'Игры для детей' },
  ],
};

export default function KidsGamesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-28 pb-20">
        <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
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
              <li className="text-gray-300">Игры для детей</li>
            </ol>
          </nav>

          <header className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent">
                VR-игры для детей в Омске
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              {total} {gamesWord} для детей от 6 лет: спокойные, весёлые и командные — без жестоких
              сцен и с короткими раундами. Администратор подберёт игру по возрасту и опыту ребёнка.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kidsGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>

          <div className="mt-12 text-center">
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
