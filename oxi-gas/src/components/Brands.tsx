import { motion } from 'framer-motion';
import logo3m from '@assets/logo-3m.png';
import logoDewalt from '@assets/logo-dewalt.png';
import logoBlackDecker from '@assets/logo-blackdecker.png';
import logoBremen from '@assets/logo-bremen.png';
import logoBosch from '@assets/logo-bosch.png';

const brands = [
  { name: '3M', src: logo3m, invertOnDark: false },
  { name: 'DeWalt', src: logoDewalt, invertOnDark: false },
  { name: 'Black & Decker', src: logoBlackDecker, invertOnDark: false },
  { name: 'Bremen', src: logoBremen, invertOnDark: true },
  { name: 'Bosch', src: logoBosch, invertOnDark: false },
];

export function Brands() {
  return (
    <section id="marcas" className="py-24 bg-[hsl(var(--surface-0))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--text-main))] mb-4">
            Marcas de Confianza
          </h2>
          <p className="text-xl text-[hsl(var(--text-soft))] max-w-2xl mx-auto">
            Al hacer click en cada marca, el cliente puede consultar directo por WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => {
            const message = `Hola OXI-GAS, quiero consultar por productos de la marca ${brand.name}.`;

            return (
              <motion.a
                key={brand.name}
                href={`https://wa.me/5491134446666?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-[hsl(var(--surface-1))] border border-[hsl(var(--surface-3))] hover:border-primary rounded-2xl p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                style={{ minHeight: '110px' }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  title={`Consultar ${brand.name}`}
                  className="w-full h-14 object-contain transition-all duration-300 group-hover:scale-105"
                  style={{
                    filter: brand.invertOnDark ? 'brightness(0) invert(1)' : 'none',
                    opacity: 0.92,
                  }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
