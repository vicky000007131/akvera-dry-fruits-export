export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  origin: string;
  description: string;
  packaging: string;
  countriesExported: string[];
  qualityGrade: string;
  specifications: ProductSpecification[];
  shippingTerms: string;
  availability: string;
  qualityStandards: string;
  image: number;
  imageUrl?: string;
  gallery?: string[];
  status: boolean;
};

export const products: Product[] = [
  {
    "id": "almonds",
    "name": "Almonds",
    "category": "Tree Nuts",
    "origin": "Origin confirmed with each quotation",
    "description": "Crisp, naturally rich almonds with a delicate sweetness. Selected for consistent size and a satisfying crunch.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "Whole kernels \u00b7 Size graded",
    "specifications": [
      {
        "label": "Selection",
        "value": "Whole kernels \u00b7 Size graded"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 0,
    "imageUrl": "/images/product-almonds.webp",
    "status": true
  },
  {
    "id": "cashews",
    "name": "Cashews",
    "category": "Tree Nuts",
    "origin": "Origin confirmed with each quotation",
    "description": "Creamy, delicately sweet cashews, carefully selected for their smooth texture and uniform ivory appearance.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "W240 / W320 \u00b7 Whole kernels",
    "specifications": [
      {
        "label": "Selection",
        "value": "W240 / W320 \u00b7 Whole kernels"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 1,
    "imageUrl": "/images/product-cashews.webp",
    "status": true
  },
  {
    "id": "pistachios",
    "name": "Pistachios",
    "category": "Tree Nuts",
    "origin": "Origin confirmed with each quotation",
    "description": "Vibrant green kernels with a distinctive nutty flavour. Available in-shell or shelled for snacking and food production.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "In-shell / Shelled \u00b7 Colour sorted",
    "specifications": [
      {
        "label": "Selection",
        "value": "In-shell / Shelled \u00b7 Colour sorted"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 2,
    "imageUrl": "/images/product-pistachios.webp",
    "status": true
  },
  {
    "id": "walnuts",
    "name": "Walnuts",
    "category": "Tree Nuts",
    "origin": "Origin confirmed with each quotation",
    "description": "Light, buttery walnut kernels with a rich, earthy flavour. Halves and pieces for bakery, retail and ingredient buyers.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "Halves / Pieces \u00b7 Light kernels",
    "specifications": [
      {
        "label": "Selection",
        "value": "Halves / Pieces \u00b7 Light kernels"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 3,
    "imageUrl": "/images/product-walnuts.webp",
    "status": true
  },
  {
    "id": "raisins",
    "name": "Raisins",
    "category": "Dried Fruits",
    "origin": "Origin confirmed with each quotation",
    "description": "Naturally sweet dried grapes with a soft bite. Carefully cleaned and graded for retail packs and bakery ingredients.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "Golden / Dark \u00b7 Cleaned & graded",
    "specifications": [
      {
        "label": "Selection",
        "value": "Golden / Dark \u00b7 Cleaned & graded"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 4,
    "imageUrl": "/images/product-raisins.webp",
    "status": true
  },
  {
    "id": "dates",
    "name": "Dates",
    "category": "Dried Fruits",
    "origin": "Origin confirmed with each quotation",
    "description": "Lusciously soft dates with a deep caramel sweetness. Selected for texture and size for gifting, retail and processing.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "Whole / Pitted \u00b7 Size selected",
    "specifications": [
      {
        "label": "Selection",
        "value": "Whole / Pitted \u00b7 Size selected"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 5,
    "imageUrl": "/images/product-dates.webp",
    "status": true
  },
  {
    "id": "figs",
    "name": "Figs",
    "category": "Dried Fruits",
    "origin": "Origin confirmed with each quotation",
    "description": "Tender dried figs with a honeyed sweetness and delicate seeds. A classic choice for premium assortments and gifting.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "Whole dried figs \u00b7 Size graded",
    "specifications": [
      {
        "label": "Selection",
        "value": "Whole dried figs \u00b7 Size graded"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 6,
    "imageUrl": "/images/product-figs.webp",
    "status": true
  },
  {
    "id": "apricots",
    "name": "Apricots",
    "category": "Dried Fruits",
    "origin": "Origin confirmed with each quotation",
    "description": "Golden dried apricots with a bright, naturally tangy sweetness. Selected for even colour, texture and presentation.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "Whole / Halves \u00b7 Colour selected",
    "specifications": [
      {
        "label": "Selection",
        "value": "Whole / Halves \u00b7 Colour selected"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 7,
    "imageUrl": "/images/product-apricots.webp",
    "status": true
  },
  {
    "id": "prunes",
    "name": "Prunes",
    "category": "Dried Fruits",
    "origin": "Origin confirmed with each quotation",
    "description": "Rich, soft dried plums with a naturally sweet flavour. Carefully selected for consistent texture and versatile use.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "Pitted / Unpitted \u00b7 Size graded",
    "specifications": [
      {
        "label": "Selection",
        "value": "Pitted / Unpitted \u00b7 Size graded"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 8,
    "imageUrl": "/images/product-prunes.webp",
    "status": true
  },
  {
    "id": "hazelnuts",
    "name": "Hazelnuts",
    "category": "Tree Nuts",
    "origin": "Origin confirmed with each quotation",
    "description": "Round, aromatic hazelnuts with a sweet, buttery character. Ideal for chocolate, bakery, nut blends and retail.",
    "packaging": "Bulk cartons \u00b7 Retail packs on request",
    "countriesExported": [
      "UAE",
      "United Kingdom",
      "Singapore"
    ],
    "qualityGrade": "Whole kernels \u00b7 Uniform grading",
    "specifications": [
      {
        "label": "Selection",
        "value": "Whole kernels \u00b7 Uniform grading"
      },
      {
        "label": "Moisture & quality",
        "value": "Agreed against the approved sample and buyer specification"
      },
      {
        "label": "Allergen information",
        "value": "Contains or may come into contact with tree nuts"
      },
      {
        "label": "Storage",
        "value": "Cool, dry conditions, away from direct sunlight"
      }
    ],
    "shippingTerms": "FOB / CFR / CIF by agreement",
    "availability": "Subject to grade and season; enquire for current stock",
    "qualityStandards": "Inspection, grading and food-grade packing to agreed destination requirements.",
    "image": 9,
    "imageUrl": "/images/product-hazelnuts.webp",
    "status": true
  }
];
