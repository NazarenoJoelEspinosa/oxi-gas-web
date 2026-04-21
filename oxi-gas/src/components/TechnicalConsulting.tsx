import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/constants';

const consultingItems = [
  {
    title: "Protocolos de Seguridad para Cilindros de Gas",
    desc: "Asesoramiento sobre el correcto almacenamiento, manipulación y protocolos de seguridad para cilindros de gases comprimidos."
  },
  {
    title: "Selección de Equipos de Soldadura",
    desc: "Ayudamos a elegir el equipo de soldadura adecuado para cada aplicación, optimizando costos y rendimiento."
  },
  {
    title: "Consultoría en Herramientas Industriales",
    desc: "Recomendaciones profesionales sobre la selección de herramientas para maximizar la productividad y vida útil."
  }
];

export function TechnicalConsulting() {
  return (
    <section id="tecnico" className="py-24 bg-[#1a2e45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Asesoramiento Técnico</h2>
          <p className="text-xl text-[#8fa3b8] max-w-2xl mx-auto">
            Más que productos — somos tu socio técnico
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {consultingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#162033] p-8 rounded-2xl border border-[#2a3f58] hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#8fa3b8] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d1b2a] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-[#2a3f58]"
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">¿Necesitás asesoramiento?</h3>
            <p className="text-[#8fa3b8]">Contactanos y un especialista te responderá a la brevedad.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-[#25d366] hover:bg-[#25d366]/90 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-[#25d366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a 
              href="#contacto" 
              className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-primary/20"
            >
              Solicitar Cotización
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}