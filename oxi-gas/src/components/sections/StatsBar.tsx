import { motion } from 'framer-motion';

const stats = [
  { value: "+60", label: "Años de experiencia" },
  { value: "500+", label: "Clientes activos" },
  { value: "100%", label: "Atención personalizada" },
];

export function StatsBar() {
  return (
    <section className="bg-[#0d1b2a] border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</span>
              <span className="text-sm md:text-base text-[#8fa3b8] font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}