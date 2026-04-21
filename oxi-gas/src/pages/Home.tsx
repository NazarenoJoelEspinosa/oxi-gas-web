// React
import { useEffect, useState } from "react";

// Components (layout)
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Components (sections)
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { CompressedGases } from "@/components/CompressedGases";
import { FeaturedMachines } from "@/components/FeaturedMachines";
import { SafetyGear } from "@/components/SafetyGear";
import { Brands } from "@/components/Brands";
import { TechnicalConsulting } from "@/components/TechnicalConsulting";
import { Hours } from "@/components/Hours";
import { QuoteForm } from "@/components/QuoteForm";

// Components (floating / UI)
import { WhatsAppButton } from "@/components/WhatsAppButton";

/**
 * Página principal de la aplicación
 * - Maneja el tema (dark/light)
 * - Renderiza todas las secciones del landing
 */
export default function Home() {
  /**
   * Estado de tema persistido en localStorage
   */
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";

    const storedTheme = localStorage.getItem("oxi-gas-theme");
    return (storedTheme as "dark" | "light") || "dark";
  });

  /**
   * Sincroniza el tema con el DOM y localStorage
   */
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }

    localStorage.setItem("oxi-gas-theme", theme);
  }, [theme]);

  /**
   * Alterna entre modo claro y oscuro
   */
  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <main className="min-h-screen bg-background relative">
      {/* Header con control de tema */}
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {/* Secciones principales */}
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

      {/* Footer */}
      <Footer />

      {/* Botón flotante */}
      <WhatsAppButton />
    </main>
  );
}
