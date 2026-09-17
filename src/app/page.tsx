import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { PackagesSection } from '@/components/sections/PackagesSection';
import { EveningSessionsSection } from '@/components/sections/EveningSessionsSection';
import { GamesSection } from '@/components/sections/GamesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'EntertainmentBusiness',
  name: 'ART-VR',
  description: 'Клуб виртуальной реальности в Омске',
  url: 'https://art-vr.ru',
  telephone: '+79609900050',
  email: 'info@art-vr.ru',
  image: 'https://art-vr.ru/icon.png',
  priceRange: '₽₽',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. 10 лет Октября, 40',
    addressLocality: 'Омск',
    postalCode: '644024',
    addressCountry: 'RU',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 54.984014, longitude: 73.388764 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '12:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '11:00',
      closes: '21:00',
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <PackagesSection />
        <EveningSessionsSection />
        <GamesSection />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
