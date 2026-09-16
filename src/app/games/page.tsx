import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GamesHeroSection } from '@/components/sections/games/GamesHeroSection';
import { GamesCatalogSection } from '@/components/sections/games/GamesCatalogSection';
import { GamesBookingSection } from '@/components/sections/games/GamesBookingSection';
import { games } from '@/lib/games-data';
import { site } from '@/lib/site';
import { plural } from '@/lib/utils';

const total = games.length;
const gamesWord = plural(total, 'игра', 'игры', 'игр');

export const metadata: Metadata = {
  title: `Каталог игр — ${total} VR-${gamesWord} в клубе ART-VR, Омск`,
  description:
    `Полный список VR-игр клуба ART-VR в Омске: ${total} ${gamesWord} — шутеры, хорроры, квесты, спорт, симуляторы и аттракционы. Фильтр по жанру, платформе и количеству игроков. Запись: ${site.phone}.`,
  alternates: {
    canonical: `${site.url}/games`,
  },
  openGraph: {
    title: `Каталог игр ART-VR — ${total} VR-${gamesWord}`,
    description:
      'Шутеры, хорроры, квесты, спорт, симуляторы и аттракционы для компании и одиночного прохождения.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ART-VR',
    url: `${site.url}/games`,
  },
};

const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Каталог игр' },
  ],
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main>
        <GamesHeroSection />
        <GamesCatalogSection />
        <GamesBookingSection />
      </main>
      <Footer />
    </div>
  );
}
