import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const whatsappBase = 'https://wa.me/5491134446666?text=';

const machines = [
  {
    name: 'Amoladoras',
    brand: 'Bosch',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Taladros y Atornilladores',
    brand: 'DeWalt',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Herramientas para taller',
    brand: 'Black & Decker',
    image: 'https://images.unsplash.com/photo-1581147036324-c1c0a2c8e16f?auto=format&fit=crop&w=900&q=80',
  },
];

export function FeaturedMachines() {
  return (
    <section id="maquinas" className="py-24 bg-[hsl(var(--surface-0))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--text-main))] mb-4">
            Máquinas destacadas
          </h2>
          <p className="text-xl text-[hsl(var(--text-soft))] max-w-3xl mx-auto">
            Cada tarjeta lleva directo a WhatsApp para consultar stock, precio o marca disponible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machines.map((machine, index) => {
            const message = `Hola OXI-GAS, quiero consultar por ${machine.name} de ${machine.brand}.`;

            return (
              <motion.a
                key={machine.name}
                href={`${whatsappBase}${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group overflow-hidden rounded-3xl bg-[hsl(var(--surface-1))] border border-[hsl(var(--surface-3))] shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-2">{machine.brand}</p>
                  <h3 className="text-2xl font-bold text-[hsl(var(--text-main))] mb-3">{machine.name}</h3>

                  <div className="inline-flex items-center gap-2 text-white bg-[#25d366] px-4 py-2 rounded-full font-semibold">
                    <MessageCircle className="w-4 h-4" />
                    Consultar por WhatsApp
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
