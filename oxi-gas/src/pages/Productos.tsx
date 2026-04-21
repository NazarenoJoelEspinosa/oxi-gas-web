import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, PackageSearch } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTheme } from '@/hooks/useTheme';
import { WHATSAPP_URL } from '@/config/constants';
import {
  PRODUCT_BRANDS,
  PRODUCT_CATEGORIES,
  PRODUCTS,
  type Product,
  type ProductBrand,
  type ProductCategory,
} from '@/data/products';

const ALL = 'all' as const;

type BrandFilter = ProductBrand | typeof ALL;
type CategoryFilter = ProductCategory | typeof ALL;

function filterProducts(
  products: readonly Product[],
  brand: BrandFilter,
  category: CategoryFilter,
): Product[] {
  return products.filter((product) => {
    const matchesBrand = brand === ALL || product.brand === brand;
    const matchesCategory = category === ALL || product.category === category;
    return matchesBrand && matchesCategory;
  });
}

function categoryLabel(value: ProductCategory): string {
  return PRODUCT_CATEGORIES.find((category) => category.value === value)?.label ?? value;
}

export default function Productos() {
  const { theme, toggleTheme } = useTheme();
  const [brand, setBrand] = useState<BrandFilter>(ALL);
  const [category, setCategory] = useState<CategoryFilter>(ALL);

  const filtered = useMemo(() => filterProducts(PRODUCTS, brand, category), [brand, category]);
  const hasActiveFilters = brand !== ALL || category !== ALL;

  const resetFilters = () => {
    setBrand(ALL);
    setCategory(ALL);
  };

  return (
    <main className="min-h-screen bg-background relative">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <section className="pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(var(--text-muted))] hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="mt-6 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Catálogo
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[hsl(var(--text-main))] tracking-tight">
            Todos nuestros productos
          </h1>
          <p className="text-lg text-[hsl(var(--text-muted))] max-w-2xl">
            Filtrá por marca o categoría para encontrar lo que necesitás. Para cotizar o consultar
            stock, escribinos por WhatsApp.
          </p>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-1))] p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <FilterField label="Categoría" htmlFor="filter-category">
              <Select
                value={category}
                onValueChange={(value) => setCategory(value as CategoryFilter)}
              >
                <SelectTrigger id="filter-category" className="w-full">
                  <SelectValue placeholder="Todas las categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Todas las categorías</SelectItem>
                  {PRODUCT_CATEGORIES.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FilterField>

            <FilterField label="Marca" htmlFor="filter-brand">
              <Select value={brand} onValueChange={(value) => setBrand(value as BrandFilter)}>
                <SelectTrigger id="filter-brand" className="w-full">
                  <SelectValue placeholder="Todas las marcas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Todas las marcas</SelectItem>
                  {PRODUCT_BRANDS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FilterField>

            <div className="flex items-center justify-between md:justify-end gap-4 md:ml-auto">
              <span className="text-sm text-[hsl(var(--text-muted))]">
                {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <EmptyState onReset={resetFilters} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

type FilterFieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
};

function FilterField({ label, htmlFor, children }: FilterFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full md:max-w-xs">
      <label
        htmlFor={htmlFor}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--text-muted))]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

type ProductCardProps = {
  product: Product;
  index: number;
};

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
    >
      <Card className="h-full border-[hsl(var(--surface-3))] bg-[hsl(var(--surface-1))] hover:border-primary/60 hover:shadow-lg transition-all duration-300">
        <CardHeader className="gap-3">
          <div className="flex items-start justify-between gap-2">
            <Badge variant="outline" className="uppercase tracking-wider text-[10px]">
              {categoryLabel(product.category)}
            </Badge>
            {product.highlight && (
              <Badge className="bg-primary/15 text-primary border-primary/30 uppercase tracking-wider text-[10px]">
                {product.highlight}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg text-[hsl(var(--text-main))] leading-snug">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm text-[hsl(var(--text-muted))]">
            {product.brand}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed">
            {product.description}
          </p>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola, quiero cotizar: ${product.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25d366] hover:bg-[#25d366]/90 text-white font-semibold text-sm py-2.5 px-4 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Cotizar por WhatsApp
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

type EmptyStateProps = { onReset: () => void };

function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-dashed border-[hsl(var(--surface-3))]">
      <PackageSearch className="h-12 w-12 text-[hsl(var(--text-muted))] mb-4" />
      <h2 className="text-xl font-bold text-[hsl(var(--text-main))]">
        No encontramos productos con esos filtros
      </h2>
      <p className="mt-2 text-[hsl(var(--text-muted))] max-w-md">
        Probá con otra combinación o consultanos directamente, seguro tenemos lo que buscás.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm py-2.5 px-5 transition-colors"
      >
        Limpiar filtros
      </button>
    </div>
  );
}
