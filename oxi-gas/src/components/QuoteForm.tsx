import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function QuoteForm() {
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines = [
      'Hola OXI-GAS, me comunico desde la web.',
      '',
      `*Nombre:* ${nombre}`,
      empresa ? `*Empresa:* ${empresa}` : null,
      `*Teléfono:* ${telefono}`,
      direccion ? `*Dirección:* ${direccion}` : null,
      '',
      '*Consulta:*',
      mensaje,
    ]
      .filter((l) => l !== null)
      .join('\n');

    const url = `https://wa.me/5491134446666?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-24 bg-[hsl(var(--surface-2))]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--text-main))] mb-4">Solicitar Cotización</h2>
          <p className="text-xl text-[hsl(var(--text-soft))]">
            Completá el formulario y te respondemos a la brevedad en horario de atención.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[hsl(var(--surface-1))] rounded-3xl p-8 md:p-12 shadow-2xl border border-[hsl(var(--surface-3))]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-sm font-medium text-[hsl(var(--text-soft))]">
                    Nombre completo <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className="w-full bg-[hsl(var(--surface-0))] border border-[hsl(var(--surface-3))] rounded-xl px-4 py-3 text-[hsl(var(--text-main))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="empresa" className="block text-sm font-medium text-[hsl(var(--text-soft))]">
                    Empresa (Opcional)
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    value={empresa}
                    onChange={e => setEmpresa(e.target.value)}
                    className="w-full bg-[hsl(var(--surface-0))] border border-[hsl(var(--surface-3))] rounded-xl px-4 py-3 text-[hsl(var(--text-main))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="telefono" className="block text-sm font-medium text-[hsl(var(--text-soft))]">
                    Teléfono <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    required
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    className="w-full bg-[hsl(var(--surface-0))] border border-[hsl(var(--surface-3))] rounded-xl px-4 py-3 text-[hsl(var(--text-main))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="11 1234-5678"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="direccion" className="block text-sm font-medium text-[hsl(var(--text-soft))]">
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    value={direccion}
                    onChange={e => setDireccion(e.target.value)}
                    className="w-full bg-[hsl(var(--surface-0))] border border-[hsl(var(--surface-3))] rounded-xl px-4 py-3 text-[hsl(var(--text-main))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Ej: Acosta 1906, Ciudadela"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="block text-sm font-medium text-[hsl(var(--text-soft))]">
                  Detalle de la consulta <span className="text-primary">*</span>
                </label>
                <textarea
                  id="mensaje"
                  required
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  rows={5}
                  className="w-full bg-[hsl(var(--surface-0))] border border-[hsl(var(--surface-3))] rounded-xl px-4 py-3 text-[hsl(var(--text-main))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Contanos qué necesitás cotizar..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                Enviar consulta por WhatsApp
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-[hsl(var(--surface-1))] rounded-3xl p-8 border border-[hsl(var(--surface-3))] shadow-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-[hsl(var(--text-main))] mb-4">Dirección del local</h3>

            <p className="text-[hsl(var(--text-soft))] text-lg leading-relaxed mb-6">
              Acosta 1906
              <br />
              Ciudadela, Provincia de Buenos Aires
            </p>

            <div className="rounded-2xl overflow-hidden border border-[hsl(var(--surface-3))]">
              <iframe
                title="Mapa OXI-GAS"
                src="https://maps.google.com/maps?q=Acosta+1906,+Ciudadela,+Provincia+de+Buenos+Aires,+Argentina&output=embed&hl=es&z=16"
                width="100%"
                height="260"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
