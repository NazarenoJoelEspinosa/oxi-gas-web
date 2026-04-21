import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
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
  const [location, setLocation] = useLocation();
  const isHome = location === '/';
  const baseUrl = import.meta.env.BASE_URL;

  const navigateHome = (hash?: string) => {
    if (hash) {
      try {
        sessionStorage.setItem('oxi-gas:pending-hash', hash);
      } catch {
        // ignore
      }
    }
    setLocation('/');
  };

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
    { name: 'Ver catálogo completo', href: '/catalogo' },
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
        <a
          href={`${baseUrl}#inicio`}
          onClick={(event) => {
            event.preventDefault();
            if (isHome) {
              document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              return;
            }
            navigateHome('#inicio');
          }}
          aria-label="OXI-GAS - Inicio"
          className="shrink-0"
        >
          <img
            src={oxiGasLogo}
            alt="OXI-GAS Ferretería Industrial"
            className="h-10 w-auto max-w-[160px] object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {mainLinks.map((link) => (
            <a
              key={link.name}
              href={`${baseUrl}${link.href}`}
              onClick={(event) => {
                if (!isHome) {
                  event.preventDefault();
                  navigateHome(link.href);
                }
              }}
              className="text-[hsl(var(--text-main))] hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}

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
                        href={link.name === 'Ver catálogo completo' ? `${baseUrl}catalogo` : `${baseUrl}${link.href}`}
                        onClick={() => setProductsOpen(false)}
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
              <a
                href={`${baseUrl}#inicio`}
                onClick={(event) => {
                  if (!isHome) {
                    event.preventDefault();
                    navigateHome('#inicio');
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]"
              >
                Inicio
              </a>
              <a
                href={`${baseUrl}#gases`}
                onClick={(event) => {
                  if (!isHome) {
                    event.preventDefault();
                    navigateHome('#gases');
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]"
              >
                Gases comprimidos
              </a>
              <a
                href={`${baseUrl}#maquinas`}
                onClick={(event) => {
                  if (!isHome) {
                    event.preventDefault();
                    navigateHome('#maquinas');
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]"
              >
                Máquinas
              </a>
              <a
                href={`${baseUrl}#seguridad`}
                onClick={(event) => {
                  if (!isHome) {
                    event.preventDefault();
                    navigateHome('#seguridad');
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]"
              >
                Seguridad
              </a>
              <a
                href={`${baseUrl}#marcas`}
                onClick={(event) => {
                  if (!isHome) {
                    event.preventDefault();
                    navigateHome('#marcas');
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]"
              >
                Marcas
              </a>
              <a
                href={`${baseUrl}#horarios`}
                onClick={(event) => {
                  if (!isHome) {
                    event.preventDefault();
                    navigateHome('#horarios');
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]"
              >
                Horarios
              </a>
              <a
                href={`${baseUrl}#contacto`}
                onClick={(event) => {
                  if (!isHome) {
                    event.preventDefault();
                    navigateHome('#contacto');
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-2))]"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
