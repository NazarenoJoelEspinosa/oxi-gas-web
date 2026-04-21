import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { Services } from '@/components/Services';
import { SafetyGear } from '@/components/SafetyGear';
import { Brands } from '@/components/Brands';
import { TechnicalConsulting } from '@/components/TechnicalConsulting';
import { Hours } from '@/components/Hours';
import { QuoteForm } from '@/components/QuoteForm';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CompressedGases } from '@/components/CompressedGases';
import { FeaturedMachines } from '@/components/FeaturedMachines';
import { CatalogIntro } from '@/components/CatalogIntro';

type HomeProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export default function Home({ theme, onToggleTheme }: HomeProps) {
  useEffect(() => {
    let hash = window.location.hash;
    if (!hash) {
      try {
        hash = sessionStorage.getItem('oxi-gas:pending-hash') ?? '';
      } catch {
        hash = '';
      }
    }

    if (!hash) return;

    try {
      sessionStorage.removeItem('oxi-gas:pending-hash');
    } catch {
      // ignore
    }

    const el = document.querySelector(hash);
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <main className="min-h-screen bg-background relative">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <Hero />
      <CatalogIntro />
      <StatsBar />
      <Services />
      <CompressedGases />
      <FeaturedMachines />
      <SafetyGear />
      <Brands />
      <TechnicalConsulting />
      <Hours />
      <QuoteForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
