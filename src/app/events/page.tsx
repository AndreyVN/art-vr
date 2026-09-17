import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EventsHeroSection } from '@/components/sections/events/EventsHeroSection';
import { EventsCarouselSection } from '@/components/sections/events/EventsCarouselSection';
import { EventsContentBlock } from '@/components/sections/events/EventsContentBlock';
import { EventsPhotosSection } from '@/components/sections/events/EventsPhotosSection';
import { EventsGamesSection } from '@/components/sections/events/EventsGamesSection';
import { PackagesSection } from '@/components/sections/PackagesSection';
import { EventsFAQSection } from '@/components/sections/events/EventsFAQSection';
import { EventsAddressSection } from '@/components/sections/events/EventsAddressSection';
import { EventsToBookSection } from '@/components/sections/events/EventsToBookSection';
// EventsContactSection (форма «Оставить заявку») временно отключена — вернуть, когда
// будет почтовый сервер для приёма заявок.

export const metadata: Metadata = {
  title: 'Где отметить день рождения в Омске — VR-клуб ART-VR | корпоративы, выпускные, вечеринки',
  description:
    'Где отметить день рождения в Омске? VR-клуб ART-VR: детские и взрослые дни рождения, корпоративы, выпускные и вечеринки. 10 игровых зон, Meta Quest 3, 70+ игр. Запись: +7 (960) 990-00-50.',
  keywords: [
    'где отметить день рождения в Омске',
    'детский день рождения Омск',
    'день рождения в VR-клубе',
    'корпоратив VR Омск',
    'выпускной Омск',
    'тимбилдинг Омск',
    'ART-VR мероприятия',
  ],
  openGraph: {
    title: 'Где отметить день рождения в Омске — VR-клуб ART-VR',
    description: 'Детские и взрослые дни рождения, корпоративы, выпускные и вечеринки в VR-клубе. 10 зон, 70+ игр.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ART-VR',
  },
  alternates: {
    canonical: 'https://art-vr.ru/events',
  },
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <EventsHeroSection />
        <EventsCarouselSection />
        <EventsContentBlock />
        <EventsPhotosSection />
        <EventsGamesSection />
        <PackagesSection />
        <EventsFAQSection />
        <EventsAddressSection />
        <EventsToBookSection />
      </main>
      <Footer />
    </div>
  );
}
