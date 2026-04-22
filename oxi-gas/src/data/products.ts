// ────────────────────────────────────────────────────────────────────────
//  Catálogo de productos de OXI-GAS
//
//  Para cargar productos:
//  1. Definí las categorías reales en PRODUCT_CATEGORIES (value + label).
//  2. Definí las marcas reales en PRODUCT_BRANDS.
//  3. Cargá los productos en PRODUCTS, usando los `value` de categoría
//     y los strings de PRODUCT_BRANDS.
//
//  Mientras los arrays estén vacíos:
//   - /productos muestra el empty state.
//   - El bloque "CatalogPreview" del home muestra mensajes genéricos.
// ────────────────────────────────────────────────────────────────────────

export type ProductCategory = string;
export type ProductBrand = string;

export type ProductCategoryOption = {
  readonly value: ProductCategory;
  readonly label: string;
};

export type Product = {
  readonly id: string;
  readonly code: string;
  readonly name: string;
  readonly brand: ProductBrand;
  readonly category: ProductCategory;
  readonly highlight?: string;
};

export const PRODUCT_CATEGORIES: readonly ProductCategoryOption[] = [];

export const PRODUCT_BRANDS: readonly ProductBrand[] = [];

export const PRODUCTS: readonly Product[] = [];
