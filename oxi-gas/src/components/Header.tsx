import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import oxiGasLogo from '@assets/oxi-gas-logo.png';

type HeaderProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Gases', href: '#gases' },
    { name: 'Máquinas', href: '#maquinas' },
    { name: 'Marcas', href: '#marcas' },
    { name: 'Horarios', href: '#horarios' },
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
        <a
          href="#inicio"
          aria-label="OXI-GAS - Inicio"
          className="shrink-0 hover:opacity-90 transition-opacity duration-200"
        >
          <img
            src={oxiGasLogo}
            alt="OXI-GAS Ferretería Industrial"
            className="h-12 w-auto object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </a>

        <nav className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[hsl(var(--text-main))] hover:text-primary font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-1))] px-4 py-2 text-[hsl(var(--text-main))] hover:border-primary transition-colors"
            aria-label="Cambiar modo de color"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
          </button>

          <a
            href="#contacto"
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Contacto
          </a>
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
            aria-label="Toggle menu"
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
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[hsl(var(--text-main))] text-lg font-medium py-3 px-4 rounded-lg hover:bg-[hsl(var(--surface-2))] hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-4">
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors shadow-lg shadow-primary/20"
                >
                  Contacto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
