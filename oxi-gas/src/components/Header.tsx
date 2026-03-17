import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import oxiGasLogo from '@assets/logo-v2.png';

type HeaderProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Marcas', href: '#marcas' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const productLinks = [
    { name: 'Gases comprimidos', href: '#gases' },
    { name: 'Máquinas', href: '#maquinas' },
    { name: 'Seguridad', href: '#seguridad' },
    { name: 'Servicios', href: '#productos' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-[hsl(var(--surface-0))]/92 backdrop-blur-md shadow-lg border-[hsl(var(--surface-3))] py-4'
          : 'bg-[hsl(var(--surface-0))] border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
        <a href="#inicio" aria-label="OXI-GAS - Inicio" className="shrink-0">
          <img
            src={oxiGasLogo}
            alt="OXI-GAS Ferretería Industrial"
            className="h-20 w-auto object-contain scale-150"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#inicio"
            className="text-[hsl(var(--text-main))] hover:text-primary font-medium transition-colors"
          >
            Inicio
          </a>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[hsl(var(--text-main))] hover:text-primary font-medium transition-colors"
            >
              Productos
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full pt-4"
                >
                  <div className="w-72 rounded-2xl border border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-1))] shadow-2xl p-3">
                    {productLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-[hsl(var(--text-main))] hover:bg-[hsl(var(--surface-2))] hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {mainLinks.slice(1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[hsl(var(--text-main))] hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-1))] px-4 py-2 text-[hsl(var(--text-main))] hover:border-primary transition-colors"
            aria-label="Cambiar modo de color"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="text-[hsl(var(--text-main))] p-2 hover:bg-[hsl(var(--surface-1))] rounded-lg transition-colors border border-[hsl(var(--surface-3))]"
            aria-label="Cambiar modo de color"
          >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            className="text-[hsl(var(--text-main))] p-2 hover:bg-[hsl(var(--surface-1))] rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[hsl(var(--surface-1))] border-t border-[hsl(var(--surface-3))] overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col space-y-2">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]">
                Inicio
              </a>
              <a href="#gases" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]">
                Gases comprimidos
              </a>
              <a href="#maquinas" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]">
                Máquinas
              </a>
              <a href="#seguridad" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]">
                Seguridad
              </a>
              <a href="#marcas" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]">
                Marcas
              </a>
              <a href="#horarios" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]">
                Horarios
              </a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]">
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
