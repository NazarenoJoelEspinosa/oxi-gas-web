import { motion } from 'framer-motion';
import { Layers, Package, Shapes } from 'lucide-react';
import { Link } from 'wouter';

import { PRODUCT_BRANDS, PRODUCT_CATEGORIES, PRODUCTS } from '@/data/products';

export function CatalogIntro() {
  const productCount = PRODUCTS.length;
  const categoryCount = PRODUCT_CATEGORIES.length;
  const brandCount = PRODUCT_BRANDS.length;

  return (
    <section className="py-20 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-4">
              Nuestro catálogo
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Encontrá lo que
              <br />
              necesitás
              <br />
              en segundos
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[#8fa3b8] max-w-2xl leading-relaxed">
              Explorá todos nuestros productos filtrando por marca o categoría. Cotizá lo que te interese directamente por
              WhatsApp.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/catalogo"
                className="inline-flex justify-center items-center gap-3 bg-primary hover:bg-primary/90 text-white font-extrabold text-lg py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300"
              >
                Ver catálogo completo <span aria-hidden>→</span>
              </Link>

              <Link
                href="/catalogo#filtros"
                className="inline-flex justify-center items-center gap-3 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-extrabold text-lg py-4 px-8 rounded-xl transition-all duration-300"
              >
                Filtrar por marca
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 grid place-content-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-white">{productCount}+ productos</p>
                  <p className="text-[#8fa3b8]">Catálogo completo en una sola vista</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 grid place-content-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-white">{categoryCount} categorías</p>
                  <p className="text-[#8fa3b8]">Soldadura, neumática, herramientas y más</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 grid place-content-center">
                  <Shapes className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-white">{brandCount} marcas</p>
                  <p className="text-[#8fa3b8]">Wembley, AMX, Aligas y más</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

