import { motion } from 'framer-motion';
import logo3m from '@assets/logo-3m.png';
import logoDewalt from '@assets/logo-dewalt.png';
import logoBremen from '@assets/logo-bremen.png';
import logoBosch from '@assets/logo-bosch.png';

const base = import.meta.env.BASE_URL;
const whatsappNumber = '5491134446666';

const brands = [
  { name: '3M', src: logo3m },
  { name: 'DeWalt', src: logoDewalt },
  { name: 'Bosch', src: logoBosch },
  { name: 'Bremen', src: logoBremen },
  { name: 'Stanley', src: `${base}images/logos/stanley.png` },

  { name: 'Acindar', src: `${base}images/logos/acindar.png` },
  { name: 'Aleba', src: `${base}images/logos/aleba.png` },
  { name: 'Bahco', src: `${base}images/logos/bahco.png` },
  { name: 'Bulit', src: `${base}images/logos/bulit.png` },
  { name: 'Conarco', src: `${base}images/logos/conarco.png` },

  { name: 'Doble A', src: `${base}images/logos/doblea.png` },
  { name: 'Dogo', src: `${base}images/logos/dogo.png` },
  { name: 'Einhell', src: `${base}images/logos/einhell.png` },
  { name: 'Fischer', src: `${base}images/logos/fischer.png` },
  { name: 'Hamilton', src: `${base}images/logos/hamilton.png` },

  { name: 'Inco', src: `${base}images/logos/inco.png` },
  { name: 'Laser', src: `${base}images/logos/laser.png` },
  { name: 'Libus', src: `${base}images/logos/libus.png` },
  { name: 'Loctite', src: `${base}images/logos/loctite.png` },
  { name: 'Lusqtoff', src: `${base}images/logos/lusqtoff.png` },

  { name: 'Makita', src: `${base}images/logos/makita.png` },
  { name: 'Nebraska', src: `${base}images/logos/nebraska.png` },
  { name: 'Ombu', src: `${base}images/logos/ombu.png` },
  { name: 'Poxipol', src: `${base}images/logos/poxipol.png` },
  { name: 'Ruhlmann', src: `${base}images/logos/ruhlmann.png` },

  { name: 'Rust Oleum', src: `${base}images/logos/rustoleum.png` },
  { name: 'Siloc', src: `${base}images/logos/siloc.png` },
  { name: 'Sin Par', src: `${base}images/logos/sinpar.png` },
  { name: 'Skil', src: `${base}images/logos/skil.png` },
  { name: 'Suprabond', src: `${base}images/logos/suprabond.png` },

  { name: 'Tel', src: `${base}images/logos/tel.png` },
  { name: 'Truper', src: `${base}images/logos/truper.png` },
  { name: 'Tyrolit', src: `${base}images/logos/tyrolit.png` },
  { name: 'Uranga', src: `${base}images/logos/uranga.png` },
  { name: 'WD-40', src: `${base}images/logos/wd40.png` },
  { name: 'Intraud', src: `${base}images/logos/intraud.png` },
  { name: 'Black & Decker', src: `${base}images/logos/blackdecker.png` },
];

export function Brands() {
  const repeatedBrands = [...brands, ...brands];

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

        <div className="overflow-hidden relative">
          <div className="brands-track flex items-center gap-6 md:gap-8 w-max">
            {repeatedBrands.map((brand, index) => {
              const message = `Hola OXI-GAS, quiero consultar por productos de la marca ${brand.name}.`;

              return (
                <a
                  key={`${brand.name}-${index}`}
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-[150px] h-[95px] md:w-[180px] md:h-[105px] rounded-2xl border border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-1))] hover:border-primary hover:-translate-y-1 transition-all duration-300 px-4"
                >
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden px-3">
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="max-w-full max-h-[46px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
