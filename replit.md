# OXI-GAS — Web ferretería industrial

React 19 + Vite + TypeScript + Tailwind v4 + framer-motion + wouter.

## Comandos
- Dev: `cd oxi-gas && PORT=5000 BASE_PATH=/ npm run dev`
- Typecheck: `cd oxi-gas && npm run typecheck`
- Build: `cd oxi-gas && npm run build`

## Estructura

```
oxi-gas/src/
├─ App.tsx                   Router (wouter) + TooltipProvider
├─ main.tsx
├─ index.css                 Tailwind v4 + tokens HSL
├─ vite-env.d.ts             tipos para import.meta.env y assets
├─ components/
│  ├─ ui/                    primitives shadcn (solo los usados: badge, button,
│  │                         card, dialog, input, label, select, separator,
│  │                         sheet, skeleton, textarea, toggle, tooltip)
│  ├─ layout/                Header, Footer, WhatsAppButton
│  ├─ sections/              Hero, StatsBar, CatalogPreview, Services,
│  │                         CompressedGases, FeaturedMachines, SafetyGear,
│  │                         Brands, TechnicalConsulting, Hours
│  └─ features/              QuoteForm, QuoteCart
├─ config/constants.ts       WhatsApp, contacto, dirección, horarios
├─ data/products.ts          237 productos reales del CSV (sin precios)
├─ hooks/
│  ├─ useTheme.ts
│  └─ useQuoteCart.ts        carrito de cotización con localStorage + sync
├─ lib/utils.ts              cn (clsx + tailwind-merge)
└─ pages/                    Home.tsx, Productos.tsx, NotFound.tsx
```

## Decisiones / convenciones
- TS estricto desactivado (heredado), pero typecheck pasa limpio.
- `ignoreDeprecations: "6.0"` en tsconfig para silenciar warning baseUrl.
- Tokens CSS: `--surface-0/1/2/3`, `--text-main`, `--text-muted` en `index.css`.
- Naming hooks: camelCase (`useQuoteCart`, `useTheme`).
- Naming pages y componentes: PascalCase.
- Sin react-query ni Toaster (eliminados por no uso). Si se necesitan, se reinstalan.

## Carrito de cotización
Hook `useQuoteCart` persiste códigos en `localStorage`, sincroniza entre pestañas
(event `storage`) y resuelve contra `PRODUCTS` al renderizar para tolerar
códigos huérfanos. UI: botón toggle por card, FAB flotante con contador, panel
lateral (`Sheet`) con CTA WhatsApp que arma un único mensaje con todos los items.

## Catálogo
237 productos cargados desde CSV del usuario. Sin precios (a pedido). 22 marcas,
10 categorías. Cada producto tiene `code` (ej `LL0400`) que se incluye en los
mensajes de WhatsApp para que el local identifique el ítem.
