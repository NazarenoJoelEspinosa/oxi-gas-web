import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Truck, Wrench, MapPin } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/constants';

const trustBadges = [
  { icon: ShieldCheck, label: 'Marcas líderes' },
  { icon: Truck, label: 'Stock permanente' },
  { icon: Wrench, label: 'Asesoramiento' },
];

const zonas = [
  'Caseros', 'Ramos Mejía', 'Castelar', 'Morón',
  'San Justo', 'Villa Lugano', 'y zonas cercanas',
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
  <div className="container mx-auto px-4 py-16 lg:py-24">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      
      {/* CONTENIDO */}
      <div className="space-y-6 text-center lg:text-left">
        <span className="inline-block bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-full text-sm font-medium">
          Líderes en soldadura, gases y seguridad industrial
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
          Todo para tu trabajo industrial, en{" "}
          <span className="text-red-500">un solo lugar</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
          Gases industriales, máquinas, insumos y asesoramiento técnico para profesionales, industrias y talleres.
        </p>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/productos"
            className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
          >
            Cotizar productos ahora
          </a>

          <a
            href="https://wa.me/TUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-xl font-semibold text-lg"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>

      {/* IMAGEN */}
      <div className="relative">
        <img
          src="/images/local-hero.jpg"
          alt="Local OXI-GAS"
          className="w-full h-auto max-h-[550px] object-cover rounded-2xl shadow-2xl"
        />
      </div>

    </div>
  </div>
</section>
  );
}
