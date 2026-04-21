import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, ShoppingCart, Trash2, X } from 'lucide-react';

import { whatsappUrl } from '@/config/constants';
import { PRODUCTS, type Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

type QuoteCartProps = {
  codes: readonly string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRemove: (code: string) => void;
  onClear: () => void;
};

function resolveProducts(codes: readonly string[]): Product[] {
  const map = new Map(PRODUCTS.map((p) => [p.code, p]));
  return codes.map((c) => map.get(c)).filter((p): p is Product => Boolean(p));
}

export function QuoteCart({ codes, open, onOpenChange, onRemove, onClear }: QuoteCartProps) {
  const selected = resolveProducts(codes);
  const count = selected.length;

  const message = [
    'Hola, quiero cotizar los siguientes productos:',
    ...selected.map((p) => `• [${p.code}] ${p.name} (${p.brand})`),
  ].join('\n');

  const waHref = whatsappUrl(message);

  return (
    <>
      <AnimatePresence>
        {count > 0 && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => onOpenChange(true)}
            aria-label={`Abrir cotización (${count} productos)`}
            className="fixed z-40 bottom-6 left-6 inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold pl-5 pr-6 py-3.5 shadow-2xl shadow-primary/30 transition-all hover:scale-[1.03]"
          >
            <span className="relative inline-flex">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-white text-primary text-xs font-bold">
                {count}
              </span>
            </span>
            <span className="hidden sm:inline text-sm uppercase tracking-wider">Mi cotización</span>
          </motion.button>
        )}
      </AnimatePresence>

      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md flex flex-col bg-[hsl(var(--surface-1))] border-l border-[hsl(var(--surface-3))] text-[hsl(var(--text-main))]"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="flex items-center gap-2 text-[hsl(var(--text-main))]">
              <ShoppingCart className="h-5 w-5 text-primary" />
              Mi cotización
            </SheetTitle>
            <SheetDescription className="text-[hsl(var(--text-soft))]">
              Revisá los productos y mandanos todo en un solo mensaje por WhatsApp.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4">
            {selected.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[hsl(var(--surface-2))] text-[hsl(var(--text-soft))] mb-4">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <p className="font-semibold text-[hsl(var(--text-main))]">Tu lista está vacía</p>
                <p className="mt-1 text-sm text-[hsl(var(--text-soft))] max-w-xs">
                  Agregá productos del catálogo para armar tu cotización.
                </p>
              </div>
            ) : (
              <ul className="flex flex-col gap-3">
                {selected.map((p) => (
                  <li
                    key={p.code}
                    className="flex items-start gap-3 rounded-xl border border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-2))] p-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--text-soft))]">
                        {p.code}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[hsl(var(--text-main))] leading-snug">
                        {p.name}
                      </p>
                      <p className="mt-1 text-xs text-[hsl(var(--text-soft))]">{p.brand}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(p.code)}
                      aria-label={`Quitar ${p.name} de la cotización`}
                      className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md text-[hsl(var(--text-soft))] hover:text-destructive hover:bg-[hsl(var(--surface-3))] transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-[hsl(var(--surface-3))] pt-4 space-y-3">
            <Button
              asChild
              disabled={count === 0}
              className="w-full bg-[#25d366] hover:bg-[#25d366]/90 text-white font-extrabold"
            >
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Cotizar {count} {count === 1 ? 'producto' : 'productos'} por WhatsApp
              </a>
            </Button>

            <button
              type="button"
              onClick={onClear}
              disabled={count === 0}
              className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-soft))] hover:text-destructive transition-colors py-1 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Vaciar lista
            </button>
          </div>

          
        </SheetContent>
      </Sheet>
    </>
  );
}

