import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EquipmentSection } from '@/components/sections/EquipmentSection';
import { GamingPCSection } from '@/components/sections/GamingPCSection';
import { PlayStation5Section } from '@/components/sections/PlayStation5Section';
import { LoungeSection } from '@/components/sections/LoungeSection';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Оборудование VR-клуба ART-VR в Омске — Meta Quest 3, мощные ПК, PS5',
  description:
    'Оборудование клуба ART-VR: беспроводные VR-шлемы Meta Quest 3 и Meta Quest 3S, мощные игровые ПК, PlayStation 5 и зона отдыха. 10 игровых зон в Омске, ул. 10 лет Октября, 40.',
  alternates: { canonical: `${site.url}/oborudovanie` },
  openGraph: {
    title: 'Оборудование VR-клуба ART-VR — Meta Quest 3, мощные ПК, PS5',
    description: 'Беспроводные шлемы Meta Quest 3, мощные игровые ПК и PlayStation 5. 10 игровых зон в Омске.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ART-VR',
    url: `${site.url}/oborudovanie`,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Оборудование' },
  ],
};

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-28">
        <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
          <nav aria-label="Хлебные крошки" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Оборудование</li>
            </ol>
          </nav>

          <header className="text-center max-w-3xl mx-auto mb-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Оборудование клуба ART-VR
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              10 игровых зон на беспроводных шлемах Meta Quest 3 и Meta Quest 3S, мощные игровые ПК,
              PlayStation 5 и зона отдыха — всё для комфортной игры и мероприятий.
            </p>
          </header>
        </div>

        <EquipmentSection />
        <GamingPCSection />
        <PlayStation5Section />
        <LoungeSection />

        <section className="py-16 bg-slate-950">
          <div className="max-w-3xl mx-auto px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Приходите играть на топовом оборудовании
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Забронируйте игровое время или мероприятие — подберём зоны и игры под вашу компанию.
            </p>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all"
            >
              {site.phone}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
