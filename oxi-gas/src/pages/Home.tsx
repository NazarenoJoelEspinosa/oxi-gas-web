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
import { CatalogPreview } from '@/components/CatalogPreview';
import { useTheme } from '@/hooks/useTheme';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background relative">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <StatsBar />
      <CatalogPreview />
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
