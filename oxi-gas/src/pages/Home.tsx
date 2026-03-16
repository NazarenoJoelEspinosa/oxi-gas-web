import { useEffect, useState } from 'react';
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

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem('oxi-gas-theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('oxi-gas-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className="min-h-screen bg-background relative">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
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
