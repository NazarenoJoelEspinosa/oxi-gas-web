import { motion } from 'framer-motion';

const gases = [
  {
    title: 'Oxígeno Industrial',
    description: 'Ideal para soldadura, corte y procesos metalúrgicos.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Argón y Mezclas',
    description: 'Soluciones para soldadura MIG, TIG y trabajos de precisión.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Acetileno y CO₂',
    description: 'Opciones confiables para corte, mantenimiento y uso industrial.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
  },
];

export function CompressedGases() {
  return (
    <section id="gases" className="py-24 bg-[hsl(var(--surface-2))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--text-main))] mb-4">
            Gases Comprimidos
          </h2>
          <p className="text-xl text-[hsl(var(--text-soft))] max-w-3xl mx-auto">
            Sumé una galería visual para mostrar mejor la línea de gases que venden y reforzar la parte industrial de la web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gases.map((gas, index) => (
            <motion.article
              key={gas.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="overflow-hidden rounded-3xl bg-[hsl(var(--surface-1))] border border-[hsl(var(--surface-3))] shadow-xl"
            >
              <img src={gas.image} alt={gas.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[hsl(var(--text-main))] mb-3">{gas.title}</h3>
                <p className="text-[hsl(var(--text-soft))] leading-relaxed">{gas.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
