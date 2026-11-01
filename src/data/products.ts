import { TeeColor, CatalogProduct } from '../types';

export const TEE_COLORS: TeeColor[] = [
  {
    id: 'black',
    name: 'Washed Charcoal',
    hex: '#18181b',
    clothHex: '#141416',
    image: '/images/tee-black.jpg',
    accent: '#3f3f46',
  },
  {
    id: 'cream',
    name: 'Raw Bone',
    hex: '#e7e3da',
    clothHex: '#eae7df',
    image: '/images/tee-cream.jpg',
    accent: '#a8a29e',
  },
  {
    id: 'wine',
    name: 'Merlot Vintage',
    hex: '#581c2d',
    clothHex: '#4c1726',
    image: '/images/tee-wine.jpg',
    accent: '#831843',
  },
  {
    id: 'forest',
    name: 'Pine Reserve',
    hex: '#143324',
    clothHex: '#122c1f',
    image: '/images/tee-forest.jpg',
    accent: '#064e3b',
  },
  {
    id: 'white',
    name: 'Optic Alabaster',
    hex: '#f8fafc',
    clothHex: '#f1f5f9',
    image: '/images/tee-cream.jpg',
    accent: '#cbd5e1',
  },
  {
    id: 'blue',
    name: 'Midnight Prussian',
    hex: '#1e293b',
    clothHex: '#172033',
    image: '/images/tee-black.jpg',
    accent: '#3b82f6',
  },
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'arch-01',
    title: 'Archetype Heavyweight Tee',
    subtitle: 'Edition 01 / Permanent Collection',
    silhouette: 'Relaxed Drop-Shoulder',
    gsm: 340,
    price: 145,
    availableColors: [TEE_COLORS[0], TEE_COLORS[1], TEE_COLORS[2], TEE_COLORS[3]],
    defaultColor: TEE_COLORS[0],
    primaryImage: '/images/tee-black.jpg',
    secondaryImage: '/images/hero-look.jpg',
    details: [
      '340 GSM Japanese ring-spun carded combed cotton',
      'Blind-stitched sleeves and raw-edge reinforced neckline',
      'Preshrunk with low-impact enzyme bath in Okayama',
      'Seamless tubular knit torso construction'
    ]
  },
  {
    id: 'box-02',
    title: 'Atelier Boxy Drape Tee',
    subtitle: 'Edition 02 / Architectural Silhouette',
    silhouette: 'Sculptural Square Cut',
    gsm: 380,
    price: 165,
    availableColors: [TEE_COLORS[1], TEE_COLORS[0], TEE_COLORS[3]],
    defaultColor: TEE_COLORS[1],
    primaryImage: '/images/tee-cream.jpg',
    secondaryImage: '/images/lookbook-female.jpg',
    details: [
      '380 GSM ultra-dense heavyweight French terry jersey',
      'Double-fold mock neckline with 2.5cm ribbed binding',
      'Wide architectural sleeve aperture for structured drape',
      'Tonal debossed archival atelier label at lower left hem'
    ]
  },
  {
    id: 'merlot-03',
    title: 'Reserve Merlot Pigment Tee',
    subtitle: 'Edition 03 / Botanical Pigment Dye',
    silhouette: 'Oversized Classic drape',
    gsm: 320,
    price: 155,
    availableColors: [TEE_COLORS[2], TEE_COLORS[0], TEE_COLORS[1]],
    defaultColor: TEE_COLORS[2],
    primaryImage: '/images/tee-wine.jpg',
    secondaryImage: '/images/fabric-texture.jpg',
    details: [
      '320 GSM single-origin organic Aegean cotton',
      'Cold garment-dyed with natural wine-must bio-pigment',
      'Faded micro-abraded seams for authentic vintage patina',
      'Hand-numbered release batch in limited run of 300'
    ]
  },
  {
    id: 'pine-04',
    title: 'Monolith Pine Raw Tee',
    subtitle: 'Edition 04 / Forest Terroir Finish',
    silhouette: 'Kinetic Studio Cut',
    gsm: 360,
    price: 150,
    availableColors: [TEE_COLORS[3], TEE_COLORS[0], TEE_COLORS[1]],
    defaultColor: TEE_COLORS[3],
    primaryImage: '/images/tee-forest.jpg',
    secondaryImage: '/images/atelier-craft.jpg',
    details: [
      '360 GSM heavyweight open-end slub cotton knit',
      'Custom moss mineral wash with matte oil-dry handfeel',
      'Reinforced shoulder tape from recycled selvedge denim',
      'Crafted in ethical micro-mill workshop'
    ]
  }
];
