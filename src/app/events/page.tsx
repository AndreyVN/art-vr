import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EventsHeroSection } from '@/components/sections/events/EventsHeroSection';
import { EventsCarouselSection } from '@/components/sections/events/EventsCarouselSection';
import { EventsContentBlock } from '@/components/sections/events/EventsContentBlock';
import { EventsGamesSection } from '@/components/sections/events/EventsGamesSection';
import { EventsPricingSection } from '@/components/sections/events/EventsPricingSection';
import { EventsFAQSection } from '@/components/sections/events/EventsFAQSection';
import { EventsAddressSection } from '@/components/sections/events/EventsAddressSection';
import { EventsToBookSection } from '@/components/sections/events/EventsToBookSection';
import { EventsContactSection } from '@/components/sections/events/EventsContactSection';

export const metadata: Metadata = {
  title: 'Мероприятия — ART-VR | Корпоративы, дни рождения, вечеринки в Омске',
  description:
    'Проведите незабываемое мероприятие в VR-клубе ART-VR в Омске. Корпоративы, дни рождения, вечеринки, выпускные. 10 игровых зон, Meta Quest 3, 70+ игр.',
  keywords: [
    'мероприятия VR',
    'корпоратив VR Омск',
    'день рождения VR',
    'вечеринка виртуальная реальность',
    'ART-VR мероприятия',
    'тимбилдинг Омск',
  ],
  openGraph: {
    title: 'Мероприятия в ART-VR — Корпоративы и праздники в Омске',
    description: 'Корпоративы, дни рождения и вечеринки в VR-клубе. 10 зон, 70+ игр.',
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
        <EventsGamesSection />
        <EventsPricingSection />
        <EventsFAQSection />
        <EventsAddressSection />
        <EventsToBookSection />
        <EventsContactSection />
      </main>
      <Footer />
    </div>
  );
}
