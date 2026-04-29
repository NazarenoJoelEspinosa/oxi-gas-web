import { ShieldCheck, Truck, Wrench, MapPin } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/constants';

const trustBadges = [
  { icon: ShieldCheck, label: 'Marcas líderes' },
  { icon: Truck, label: 'Stock permanente' },
  { icon: Wrench, label: 'Asesoramiento técnico' },
];

const zonas = [
  'Caseros', 'Ramos Mejía', 'Castelar', 'Morón',
  'San Justo', 'Villa Lugano', 'y zonas cercanas',
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* CONTENIDO */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge superior */}
            <span className="inline-block bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-full text-sm font-medium">
              Líderes en soldadura, gases y seguridad industrial
            </span>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Todo para tu trabajo industrial, en{" "}
              <span className="text-red-500">un solo lugar</span>
            </h1>

            {/* Descripción */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Gases industriales, máquinas, insumos y asesoramiento técnico para profesionales, industrias y talleres.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/productos"
                className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
              >
                Cotizar productos ahora
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* Badges de confianza */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <Icon className="w-4 h-4 text-red-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Cobertura */}
            <div className="flex items-start gap-2 justify-center lg:justify-start text-sm text-slate-400 pt-2 max-w-2xl">
              <MapPin className="w-4 h-4 mt-0.5 text-red-400 shrink-0" />
              <p>
                Atención en {zonas.join(', ')}
              </p>
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
