import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/constants';

type ScrollIndicatorProps = {
  targetId: string;
  label?: string;
};

function ScrollIndicator({ targetId, label = 'Ver más contenido' }: ScrollIndicatorProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={`#${targetId}`}
      aria-label={label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em]">Scroll</span>
      <motion.span
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40"
      >
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </motion.span>
    </motion.a>
  );
}

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[75vh] flex items-center justify-center pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1350&q=80" 
          alt="Soldadura industrial" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0d1b2a]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-6">
            <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
              Ferretería Industrial Profesional
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Gases Comprimidos y <br/>Herramientas Industriales
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#8fa3b8] mb-10 font-medium max-w-2xl leading-relaxed">
            Oxígeno · Acetileno · Argón · CO₂ | Equipos profesionales para soldadura y construcción
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#contacto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300"
            >
              Solicitar Cotización
            </motion.a>
            
            <motion.a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex justify-center items-center gap-3 bg-[#25d366] hover:bg-[#25d366]/90 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-[#25d366]/20 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Hacer un pedido por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator targetId="productos" label="Ir a la sección de productos" />
    </section>
  );
}