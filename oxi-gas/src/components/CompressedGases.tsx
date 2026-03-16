import { motion } from 'framer-motion';

const gases = [
  {
    title: 'Gas envasado',
    description:
      'Contamos con opciones de gas envasado para distintas necesidades, con atención personalizada y asesoramiento para tu compra.',
    image: `${import.meta.env.BASE_URL}images/gases/ypf-gas.png`
  },
  {
    title: 'Gases comprimidos',
    description:
      'Disponemos de gases comprimidos para uso industrial, soldadura y trabajos técnicos, con variedad de envases y formatos.',
    image: '/images/gases/cilindros-industriales.jpg',
  },
  {
    title: 'Asesoramiento y disponibilidad',
    description:
      'Te ayudamos a elegir la mejor opción según el trabajo que necesites realizar y la disponibilidad de envases.',
    image: '/images/gases/cilindros-industriales.jpg',
  },
];

export function CompressedGases() {
  return (
    <section id="gases" className="py-24 bg-[hsl(var(--surface-2))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
            OXI-GAS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--text-main))] mb-4">
            Gases comprimidos
          </h2>
          <p className="text-lg md:text-xl text-[hsl(var(--text-soft))] max-w-3xl mx-auto">
            Soluciones para uso industrial, comercial y técnico, con atención cercana y asesoramiento según cada necesidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gases.map((gas, index) => (
            <motion.article
              key={gas.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="overflow-hidden rounded-3xl bg-[hsl(var(--surface-1))] border border-[hsl(var(--surface-3))] shadow-xl"
            >
              <div className="h-72 bg-white">
                <img
                  src={gas.image}
                  alt={gas.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[hsl(var(--text-main))] mb-3">
                  {gas.title}
                </h3>
                <p className="text-[hsl(var(--text-soft))] leading-relaxed">
                  {gas.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
