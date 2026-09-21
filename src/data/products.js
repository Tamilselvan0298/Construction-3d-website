/**
 * AURA Haute Parfumerie - Product Data
 * 
 * To customize or replace images:
 * - Place your transparent product PNG/WebP files into /public/images/
 * - Update the paths and olfactory metadata below.
 */

export const heroProduct = {
  id: "hero-aura",
  number: "01",
  name: "L'AURA ORIGINALE",
  subtitle: "EAU DE PARFUM INTENSE",
  edition: "PREMIER MILLÉSIME",
  bottleImage: "/images/product-bottle.webp",
  boxImage: "/images/product-box.webp",
  headline: ["EVERY", "DROP", "TELLS", "A STORY"],
  eyebrow: "THE ART OF HAUTE PARFUMERIE",
  tagline: "A fragrance created around depth, character, and indelible memory.",
  volume: "100 ML — 3.4 FL. OZ.",
  concentration: "28% Extrait de Parfum",
  origin: "GRASSE & PARIS",
  price: "€ 340",
  notes: {
    top: ["Calabrian Bergamot", "Saffron Threads", "Black Pepper"],
    heart: ["Damask Rose Absolue", "Smoked Amber", "Florentine Orris"],
    base: ["Royal Cambodian Oud", "Bourbon Vanilla", "Atlas Cedarwood"]
  }
};

export const collectionProducts = [
  {
    id: "prod-01",
    num: "01",
    name: "L'AURA ORIGINALE",
    category: "Eau de Parfum Intense",
    year: "2024",
    price: "€ 340",
    image: "/images/product-1.webp",
    boxImage: "/images/product-box.webp",
    mood: "Amber Luminescence",
    tagline: "The foundational essence of warmth, liquid gold, and infinite presence.",
    description: "Built upon rare Grasse florals steeped in golden amber and aged Cambodian oud, L'AURA ORIGINALE captures the sensation of twilight descending over Parisian limestone.",
    notes: {
      top: "Calabrian Bergamot, Golden Saffron, Cardamom",
      heart: "Centifolia Rose, Warm Amber, Florentine Orris",
      base: "Wild Oud Wood, Madagascar Vanilla, Cedar"
    },
    specs: {
      volume: "100ml",
      concentration: "28% Extrait",
      sillage: "Enveloping & Persistent"
    }
  },
  {
    id: "prod-02",
    num: "02",
    name: "NOCTURNE AMBRÉ",
    category: "Extrait de Parfum",
    year: "2024",
    price: "€ 390",
    image: "/images/product-2.webp",
    boxImage: "/images/product-box.webp",
    mood: "Obsidian Twilight",
    tagline: "A clandestine encounter bathed in smoked incense and dark velvet.",
    description: "An intoxicating nocturnal exploration where dark smoked plum meets velvet leather and burning resin. A fragrance whispered under the midnight arches of Palais Royal.",
    notes: {
      top: "Smoked Black Plum, Pink Pepper, Davana",
      heart: "Black Truffle, Night-Blooming Jasmine, Leather",
      base: "Somalian Frankincense, Dark Benzoin, Smoked Oak"
    },
    specs: {
      volume: "100ml",
      concentration: "32% Pure Extrait",
      sillage: "Hypnotic & Magnetic"
    }
  },
  {
    id: "prod-03",
    num: "03",
    name: "L'OR SIGNATURE",
    category: "Parfum Sublime",
    year: "2025",
    price: "€ 420",
    image: "/images/product-3.webp",
    boxImage: "/images/product-box.webp",
    mood: "Alchemical Radiance",
    tagline: "Architectural precision distilled into liquid light.",
    description: "The crown jewel of our private reserve. Crisp solar neroli dissolves into aged honeyed labdanum, framed by rare sandalwood shaved from centenary sacred groves.",
    notes: {
      top: "Solar Neroli, Sicilian Mandora, Bitter Almond",
      heart: "Honeyed Labdanum, Solar Jasmine, Immortelle",
      base: "Mysore Sandalwood, Cashmere Musk, Golden Amber"
    },
    specs: {
      volume: "100ml",
      concentration: "30% Haute Concentration",
      sillage: "Radiant & Architectural"
    }
  }
];

export const brandDetails = {
  quote: "A fragrance is not simply worn. It is remembered.",
  philosophy: "In the silent ateliers of Grasse, our master noses extract the soul of botanicals harvested only during dawn's first dew. Time is our rarest ingredient.",
  foundingYear: "1924 — PARIS",
  atelierAddress: "14 Place Vendôme, 75001 Paris"
};
