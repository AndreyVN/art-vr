import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PhotoGallery } from '@/components/gallery/PhotoGallery';
import { galleryPhotos } from '@/lib/gallery-data';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Фото VR-клуба ART-VR в Омске — игровые залы, шлемы, зона отдыха, PS5',
  description:
    'Фотографии клуба виртуальной реальности ART-VR в Омске: игровые залы с неоновой подсветкой, беспроводные шлемы Meta Quest 3, зона отдыха, PlayStation 5, дни рождения и праздники. Ул. 10 лет Октября, 40.',
  alternates: { canonical: `${site.url}/foto` },
  openGraph: {
    title: 'Фото VR-клуба ART-VR — Омск',
    description: 'Игровые залы, шлемы Meta Quest 3, зона отдыха и праздники в клубе ART-VR.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ART-VR',
    url: `${site.url}/foto`,
    images: [{ url: galleryPhotos[0]?.src ?? '/icon.png' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Фото' },
  ],
};

export default function PhotoPage() {
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
              <li className="text-gray-300">Фото</li>
            </ol>
          </nav>

          <header className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Фото клуба ART-VR
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Игровые залы с неоновой подсветкой, беспроводные шлемы Meta Quest 3, зона отдыха,
              PlayStation 5 и праздники — как всё выглядит вживую.
            </p>
          </header>

          <PhotoGallery photos={galleryPhotos} />
        </div>

        <section className="py-16 border-t border-white/10 bg-slate-900 mt-16">
          <div className="max-w-3xl mx-auto px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Понравилось? Приходите к нам
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Забронируйте игровое время или мероприятие — ответим на вопросы и подберём игры.
            </p>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Забронировать
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
