import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, Phone, ExternalLink } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ReviewCard } from '@/components/reviews/ReviewCard';
import { reviews, reviewsAggregate } from '@/lib/reviews-data';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Отзывы о VR-клубе ART-VR в Омске — 5,0 на 2ГИС',
  description:
    'Отзывы гостей о клубе виртуальной реальности ART-VR в Омске: рейтинг 5,0 и 172 оценки на 2ГИС. Что говорят о днях рождения, играх, оборудовании и сервисе клуба на ул. 10 лет Октября, 40.',
  alternates: { canonical: `${site.url}/otzyvy` },
  openGraph: {
    title: 'Отзывы о VR-клубе ART-VR — Омск',
    description: 'Рейтинг 5,0 и 172 оценки на 2ГИС. Реальные отзывы гостей клуба ART-VR.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ART-VR',
    url: `${site.url}/otzyvy`,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Отзывы' },
  ],
};

export default function ReviewsPage() {
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
              <li className="text-gray-300">Отзывы</li>
            </ol>
          </nav>

          <header className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Отзывы о клубе ART-VR
              </span>
            </h1>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 bg-slate-900/70 border border-blue-500/20 rounded-2xl px-6 py-4">
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="text-2xl font-bold text-white">5,0</span>
              <span className="text-gray-400">
                {reviewsAggregate.ratingsCount} оценки · {reviewsAggregate.reviewsCount} отзывов на{' '}
                {reviewsAggregate.source}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={reviewsAggregate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
              >
                Все отзывы на 2ГИС
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-gray-700">·</span>
              <a
                href={reviewsAggregate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                Оставить отзыв
              </a>
            </div>
          </header>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
            {reviews.map((review, index) => (
              <div key={index} className="mb-6 break-inside-avoid">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <section className="py-16 border-t border-white/10 bg-slate-900 mt-16">
          <div className="max-w-3xl mx-auto px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Хотите так же? Приходите в ART-VR
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Забронируйте игровое время или мероприятие — подберём игры под вашу компанию.
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
