import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { PackagesSection } from '@/components/sections/PackagesSection';
import { EveningSessionsSection } from '@/components/sections/EveningSessionsSection';
import { GamesSection } from '@/components/sections/GamesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { LoungeSection } from '@/components/sections/LoungeSection';
import { EquipmentSection } from '@/components/sections/EquipmentSection';
import { GamingPCSection } from '@/components/sections/GamingPCSection';
import { PlayStation5Section } from '@/components/sections/PlayStation5Section';
import { LocationSection } from '@/components/sections/LocationSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <PackagesSection />
        <EveningSessionsSection />
        <GamesSection />
        <AboutSection />
        <LoungeSection />
        <EquipmentSection />
        <GamingPCSection />
        <PlayStation5Section />
        <LocationSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
