import { motion } from 'framer-motion';
import { Flame, Wrench, Hammer } from 'lucide-react';

const categories = [
  {
    icon: <Flame className="w-10 h-10 text-primary" />,
    title: "Gases Comprimidos",
    description: "Oxígeno, Acetileno, Argón, CO₂ y mezclas especiales para soldadura industrial.",
    items: ["Cilindros de Oxígeno", "Cilindros de Acetileno", "Argón puro y mezclas", "CO₂ industrial"]
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Herramientas Eléctricas y Neumáticas",
    description: "Equipos de alta resistencia para construcción y mantenimiento industrial.",
    items: ["Amoladoras", "Taladros", "Compresores", "Soldadoras"]
  },
  {
    icon: <Hammer className="w-10 h-10 text-primary" />,
    title: "Herramientas de Mano",
    description: "Herramientas manuales de precisión para profesionales.",
    items: ["Llaves y destornilladores", "Martillos y combos", "Alicates y tenazas", "Sierras y cuchillas"]
  }
];

export function Services() {
  return (
    <section id="productos" className="py-24 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Categorías de Productos</h2>
          <p className="text-xl text-[#8fa3b8] max-w-2xl mx-auto">
            Todo lo que necesitás para tu trabajo industrial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#162033] rounded-2xl p-8 shadow-lg border-t-4 border-t-primary hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-[#8fa3b8] text-lg mb-6 leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center text-[#f0f4f8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}