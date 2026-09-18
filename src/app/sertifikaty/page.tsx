import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Gift, Sparkles, Phone, ShoppingBag, PartyPopper } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/lib/site';

const nominals = ['1200', '2400', '3600'];

const steps = [
  { icon: ShoppingBag, title: 'Закажите', text: 'По телефону +7 (960) 990-00-50 или прямо в клубе на ул. 10 лет Октября, 40. Выберите номинал.' },
  { icon: Gift, title: 'Подарите', text: 'Вручите сертификат близкому — это подарок-впечатление, а не очередная вещь.' },
  { icon: PartyPopper, title: 'Приходите играть', text: 'Предъявите сертификат администратору и погружайтесь в виртуальную реальность.' },
];

export const metadata: Metadata = {
  title: 'Подарочный сертификат в VR-клуб ART-VR в Омске — 1200, 2400, 3600 ₽',
  description:
    'Подарочный сертификат в клуб виртуальной реальности ART-VR в Омске: номиналы 1200, 2400 и 3600 ₽. Подарок-впечатление детям, подросткам и взрослым — VR-игры, PlayStation 5, мероприятия. Заказ: +7 (960) 990-00-50.',
  alternates: { canonical: `${site.url}/sertifikaty` },
  openGraph: {
    title: 'Подарочный сертификат в VR-клуб ART-VR — Омск',
    description: 'Подарок-впечатление: номиналы 1200, 2400, 3600 ₽. VR-игры, PlayStation 5, мероприятия.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ART-VR',
    url: `${site.url}/sertifikaty`,
    images: [{ url: '/images/gift-certificates.jpg' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Подарочные сертификаты' },
  ],
};

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          <nav aria-label="Хлебные крошки" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Подарочные сертификаты</li>
            </ol>
          </nav>

          {/* Герой: текст + фото */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Подарочный сертификат в{' '}
                <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                  ART-VR
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Подарок-впечатление, который запомнится сильнее любой вещи. Подойдёт детям от 6 лет,
                подросткам и взрослым.
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                {nominals.map((nominal) => (
                  <div
                    key={nominal}
                    className="bg-slate-900/70 border border-blue-500/20 rounded-2xl p-3 sm:p-5"
                  >
                    <Sparkles className="w-5 h-5 text-pink-400 mx-auto mb-3" />
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                        {nominal}
                      </span>
                      <span className="text-gray-400 text-sm sm:text-lg mb-0.5">₽</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={site.phoneHref}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Заказать сертификат
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <Image
                src="/images/gift-certificates.jpg"
                alt="Подарочные сертификаты ART-VR номиналом 1200, 2400 и 3600 рублей"
                width={960}
                height={1200}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

          {/* Как это работает */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-gray-500 text-sm font-semibold">Шаг {i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* На что потратить */}
          <div className="rounded-2xl border border-blue-500/20 bg-slate-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-5 text-center">Сертификат можно потратить на</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl mx-auto">
              {[
                'Бронирование игровых зон',
                'Мероприятие: день рождения, корпоратив, вечеринку',
                'Вечерние сеансы и семейный отдых',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Sparkles className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm text-center mt-5">
              Если сумма визита больше номинала — разницу можно доплатить на месте.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
