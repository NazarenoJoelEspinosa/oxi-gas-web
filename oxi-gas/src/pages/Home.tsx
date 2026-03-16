import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { SafetyGear } from "@/components/SafetyGear";
import { Brands } from "@/components/Brands";
import { TechnicalConsulting } from "@/components/TechnicalConsulting";
import { Hours } from "@/components/Hours";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Header />
      <Hero />
      <StatsBar />
      <Services />
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