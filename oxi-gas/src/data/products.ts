export const PRODUCT_CATEGORIES = [
    { value: 'soldadura', label: 'Soldadura' },
    { value: 'neumatica', label: 'Neumática' },
    { value: 'herramientas-manuales', label: 'Herramientas manuales' },
    { value: 'extractores', label: 'Extractores' },
    { value: 'valvulas', label: 'Válvulas' },
    { value: 'medicion', label: 'Medición' },
    { value: 'cintas-adhesivos', label: 'Cintas, adhesivos y selladores' },
    { value: 'lubricacion', label: 'Lubricación y engrase' },
    { value: 'abrasivos', label: 'Abrasivos' },
    { value: 'ferreteria-general', label: 'Ferretería general' },
  ] as const;

  export const PRODUCT_BRANDS = [
    "Aligas",
  "AMX",
  "Asten",
  "Cimurat",
  "Essamet",
  "Evel",
  "Extrapol",
  "Green",
  "Hawk",
  "Latynplas",
  "Llusa",
  "Naval",
  "Nihon",
  "OR",
  "Pedercini",
  "PNT",
  "Profein",
  "Pyttsa",
  "Quilosa",
  "Tacsa",
  "Valforte",
  "Wembley",
  ] as const;

  export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]['value'];
  export type ProductBrand = (typeof PRODUCT_BRANDS)[number];

  export type Product = {
    id: string;
    code: string;
    name: string;
    brand: ProductBrand;
    category: ProductCategory;
    highlight?: string;
  };


  export const PRODUCTS: readonly Product[] = [
    // ─── Agregá tus productos acá ────────────────────────────────────────────
    // Formato de cada producto:
    // { id: "unico", code: "CODIGO", name: "Nombre del producto", brand: "NombreMarca", category: "categoria" }
    //
    // Categorías disponibles:
    //   soldadura | neumatica | herramientas-manuales | extractores
    //   valvulas | medicion | cintas-adhesivos | lubricacion | abrasivos | ferreteria-general
    //
    // Marcas: las listadas en PRODUCT_BRANDS arriba. Podés agregar más a esa lista.
    //
    // Ejemplo:
    // { id: "prod001", code: "PROD001", name: "Amoladora 115mm Bosch", brand: "AMX", category: "neumatica" },
  ];
