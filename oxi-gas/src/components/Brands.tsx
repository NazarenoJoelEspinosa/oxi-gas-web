import { motion } from 'framer-motion';
import logo3m from '@assets/logo-3m.png';
import logoDewalt from '@assets/logo-dewalt.png';
import logoBremen from '@assets/logo-bremen.png';
import logoBosch from '@assets/logo-bosch.png';

const brands = [
  {
    name: '3M',
    src: logo3m,
    logoClass: 'object-contain scale-[0.92]',
    imageStyle: {},
  },
  {
    name: 'DeWalt',
    src: logoDewalt,
    logoClass: 'object-contain scale-[0.95]',
    imageStyle: {},
  },
{
  name: 'Stanley',
  src: '/images/logos/stanley.png',
  logoClass: 'object-contain scale-[0.95]',
  imageStyle: {},
},
  {
    name: 'Bremen',
    src: logoBremen,
    logoClass: 'object-contain scale-[0.92]',
    imageStyle: {},
  },
  {
    name: 'Bosch',
    src: logoBosch,
    logoClass: 'object-contain scale-[0.92]',
    imageStyle: {},
  },
];

const whatsappNumber = '5491134446666';

export function Brands() {
  return (
    <section id="marcas" className="py-24 bg-[hsl(var(--surface-0))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
            MARCAS
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--text-main))] mb-4">
            Marcas de confianza
          </h2>

          <p className="text-lg md:text-xl text-[hsl(var(--text-soft))] max-w-2xl mx-auto">
            Trabajamos con marcas reconocidas para ofrecer calidad, respaldo y mejores opciones para cada cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => {
            const message = `Hola OXI-GAS, quiero consultar por productos de la marca ${brand.name}.`;

            return (
              <motion.a
                key={brand.name}
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="group rounded-2xl p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-1))] hover:border-primary min-h-[120px]"
              >
                <div className="w-full h-16 rounded-xl bg-white flex items-center justify-center px-4 overflow-hidden">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className={`w-full h-12 ${brand.logoClass}`}
                    style={brand.imageStyle}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
