import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, ShoppingCart, Trash2, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { WHATSAPP_URL } from '@/config/constants';
import { PRODUCTS, type Product } from '@/data/products';
import type { QuoteCart as QuoteCartType } from '@/hooks/useQuoteCart';

type QuoteCartProps = {
  cart: QuoteCartType;
};

function buildWhatsAppHref(items: readonly Product[]): string {
  const lines = items.map((item) => `• [${item.code}] ${item.name}`);
  const message = `Hola, quiero cotizar los siguientes productos:\n\n${lines.join('\n')}`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function QuoteCart({ cart }: QuoteCartProps) {
  const [open, setOpen] = useState(false);

  const items = useMemo<readonly Product[]>(() => {
    return cart.codes
      .map((code) => PRODUCTS.find((product) => product.code === code))
      .filter((product): product is Product => product !== undefined);
  }, [cart.codes]);

  return (
    <>
      <AnimatePresence>
        {cart.count > 0 && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label={`Abrir cotización (${cart.count} productos)`}
            className="fixed z-40 bottom-6 left-6 inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold pl-5 pr-6 py-3.5 shadow-2xl shadow-primary/30 transition-all hover:scale-[1.03]"
          >
            <span className="relative inline-flex">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-white text-primary text-xs font-bold">
                {cart.count}
              </span>
            </span>
            <span className="hidden sm:inline text-sm uppercase tracking-wider">
              Mi cotización
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md flex flex-col bg-[hsl(var(--surface-1))] border-l border-[hsl(var(--surface-3))] text-[hsl(var(--text-main))]"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="flex items-center gap-2 text-[hsl(var(--text-main))]">
              <ShoppingCart className="h-5 w-5 text-primary" />
              Mi cotización
            </SheetTitle>
            <SheetDescription className="text-[hsl(var(--text-muted))]">
              Revisá los productos y mandanos todo en un solo mensaje por WhatsApp.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4">
            {items.length === 0 ? (
              <EmptyCart />
            ) : (
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <CartItem key={item.code} item={item} onRemove={() => cart.remove(item.code)} />
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <SheetFooter className="flex-col gap-3 sm:flex-col sm:space-x-0 border-t border-[hsl(var(--surface-3))] pt-4">
              <a
                href={buildWhatsAppHref(items)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25d366] hover:bg-[#25d366]/90 text-white font-bold text-base py-3 px-4 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar {items.length} {items.length === 1 ? 'producto' : 'productos'} por WhatsApp
              </a>
              <button
                type="button"
                onClick={() => cart.clear()}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-muted))] hover:text-destructive transition-colors py-1"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Vaciar lista
              </button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}

type CartItemProps = {
  item: Product;
  onRemove: () => void;
};

function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-2))] p-3">
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--text-muted))]">
          {item.code}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-[hsl(var(--text-main))] leading-snug">
          {item.name}
        </p>
        <p className="mt-1 text-xs text-[hsl(var(--text-muted))]">{item.brand}</p>
      </div>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Quitar ${item.name} de la cotización`}
        className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md text-[hsl(var(--text-muted))] hover:text-destructive hover:bg-[hsl(var(--surface-3))] transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </li>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[hsl(var(--surface-2))] text-[hsl(var(--text-muted))] mb-4">
        <ShoppingCart className="h-6 w-6" />
      </div>
      <p className="font-semibold text-[hsl(var(--text-main))]">Tu lista está vacía</p>
      <p className="mt-1 text-sm text-[hsl(var(--text-muted))] max-w-xs">
        Tocá el casillero de cada producto que quieras incluir en tu cotización.
      </p>
    </div>
  );
}
