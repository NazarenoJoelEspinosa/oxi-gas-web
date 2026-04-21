export const PRODUCT_CATEGORIES = [
  { value: 'gases', label: 'Gases comprimidos' },
  { value: 'maquinas', label: 'Máquinas de soldar' },
  { value: 'seguridad', label: 'Equipos de seguridad' },
  { value: 'consumibles', label: 'Consumibles y accesorios' },
  { value: 'herramientas', label: 'Herramientas industriales' },
] as const;

export const PRODUCT_BRANDS = [
  'Lincoln Electric',
  'Indura',
  'Praxair',
  'Air Liquide',
  'Miller',
  'ESAB',
  '3M',
  'Steelpro',
  'Bosch',
  'Stanley',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]['value'];
export type ProductBrand = (typeof PRODUCT_BRANDS)[number];

export type Product = {
  id: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  description: string;
  highlight?: string;
};

export const PRODUCTS: readonly Product[] = [
  // Gases comprimidos
  {
    id: 'gas-oxigeno-10',
    name: 'Cilindro de Oxígeno 10 m³',
    brand: 'Indura',
    category: 'gases',
    description: 'Oxígeno industrial 99.5% de pureza, ideal para corte y soldadura oxiacetilénica.',
    highlight: 'Más vendido',
  },
  {
    id: 'gas-acetileno-7',
    name: 'Cilindro de Acetileno 7 kg',
    brand: 'Indura',
    description: 'Acetileno disuelto, alto poder calorífico para corte y soldadura autógena.',
    category: 'gases',
  },
  {
    id: 'gas-argon-mix',
    name: 'Mezcla Argón / CO₂ 80/20',
    brand: 'Praxair',
    category: 'gases',
    description: 'Mezcla específica para soldadura MIG en aceros al carbono.',
  },
  {
    id: 'gas-co2-25',
    name: 'Cilindro de CO₂ 25 kg',
    brand: 'Air Liquide',
    category: 'gases',
    description: 'Dióxido de carbono industrial para soldadura MIG y aplicaciones generales.',
  },
  {
    id: 'gas-argon-puro',
    name: 'Argón puro 99.99%',
    brand: 'Praxair',
    category: 'gases',
    description: 'Gas inerte para soldadura TIG en aluminio, acero inoxidable y aleaciones.',
  },

  // Máquinas
  {
    id: 'maq-lincoln-mig-180',
    name: 'Soldadora MIG Lincoln 180A',
    brand: 'Lincoln Electric',
    category: 'maquinas',
    description: 'Equipo MIG/MAG inverter, ideal para taller mediano. 220V monofásica.',
    highlight: 'Recomendada',
  },
  {
    id: 'maq-miller-tig-200',
    name: 'Soldadora TIG Miller Maxstar 200',
    brand: 'Miller',
    category: 'maquinas',
    description: 'Inverter TIG DC con arranque HF, alta precisión para acero inoxidable.',
  },
  {
    id: 'maq-esab-mma-250',
    name: 'Soldadora MMA ESAB Buddy Arc 250',
    brand: 'ESAB',
    category: 'maquinas',
    description: 'Inverter de electrodo revestido robusto para obra y taller.',
  },
  {
    id: 'maq-lincoln-plasma',
    name: 'Cortadora de Plasma Lincoln Tomahawk 625',
    brand: 'Lincoln Electric',
    category: 'maquinas',
    description: 'Corte de plasma hasta 16 mm en acero, arranque por contacto.',
  },
  {
    id: 'maq-bosch-amoladora',
    name: 'Amoladora angular Bosch GWS 22-180',
    brand: 'Bosch',
    category: 'maquinas',
    description: 'Amoladora 7", 2200W, ideal para corte y desbaste industrial.',
  },

  // Seguridad
  {
    id: 'seg-3m-mascara',
    name: 'Máscara fotosensible 3M Speedglas 9100',
    brand: '3M',
    category: 'seguridad',
    description: 'Protección facial automática con filtro variable DIN 5–13.',
    highlight: 'Premium',
  },
  {
    id: 'seg-steelpro-guantes',
    name: 'Guantes de descarne reforzados Steelpro',
    brand: 'Steelpro',
    category: 'seguridad',
    description: 'Guantes de cuero descarne con refuerzo en palma, hasta 350°C.',
  },
  {
    id: 'seg-3m-respirador',
    name: 'Respirador 3M 6200 + filtros',
    brand: '3M',
    category: 'seguridad',
    description: 'Media máscara reutilizable con filtros para humos de soldadura.',
  },
  {
    id: 'seg-steelpro-botin',
    name: 'Botín de seguridad dieléctrico Steelpro',
    brand: 'Steelpro',
    category: 'seguridad',
    description: 'Puntera composite, suela antiperforación, certificación dieléctrica.',
  },
  {
    id: 'seg-3m-anteojos',
    name: 'Anteojos de seguridad 3M Virtua',
    brand: '3M',
    category: 'seguridad',
    description: 'Lente policarbonato antiempañante, protección UV.',
  },

  // Consumibles
  {
    id: 'con-electrodo-6013',
    name: 'Electrodo Lincoln 6013 Ø2.5mm (5kg)',
    brand: 'Lincoln Electric',
    category: 'consumibles',
    description: 'Electrodo rutílico de uso general, excelente para principiantes.',
  },
  {
    id: 'con-alambre-mig-er70',
    name: 'Alambre MIG ER70S-6 Ø0.9mm (15kg)',
    brand: 'ESAB',
    category: 'consumibles',
    description: 'Alambre macizo para soldadura MIG en aceros al carbono.',
  },
  {
    id: 'con-disco-corte',
    name: 'Disco de corte metal 7" (caja x25)',
    brand: 'Bosch',
    category: 'consumibles',
    description: 'Disco abrasivo de corte para acero, alta duración.',
  },
  {
    id: 'con-tungsteno-tig',
    name: 'Electrodos de tungsteno TIG WL15 (paq. x10)',
    brand: 'Miller',
    category: 'consumibles',
    description: 'Tungsteno lantanado 1.5%, excelente para corriente continua.',
  },

  // Herramientas
  {
    id: 'her-stanley-llaves',
    name: 'Juego de llaves combinadas Stanley (16 piezas)',
    brand: 'Stanley',
    category: 'herramientas',
    description: 'Llaves combinadas 8–24 mm, acero cromo vanadio.',
  },
  {
    id: 'her-bosch-taladro',
    name: 'Taladro percutor Bosch GSB 13 RE',
    brand: 'Bosch',
    category: 'herramientas',
    description: 'Taladro 600W con percusión, mandril 13 mm. Ideal para mantenimiento.',
  },
  {
    id: 'her-stanley-pinzas',
    name: 'Set de pinzas Stanley FatMax (3 piezas)',
    brand: 'Stanley',
    category: 'herramientas',
    description: 'Pinza universal, de corte y de punta. Mango bimaterial antideslizante.',
  },
  {
    id: 'her-bosch-sierra',
    name: 'Sierra circular Bosch GKS 190',
    brand: 'Bosch',
    category: 'herramientas',
    description: 'Sierra circular 1400W con disco 184 mm para corte de metales y madera.',
  },
];
