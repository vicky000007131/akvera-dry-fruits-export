export type BlogPost = {
  id: string;
  title: string;
  category: "Export Guide" | "Packaging Tips" | "Global Trade" | "Dry Fruits Market" | "Business News";
  date: string;
  readTime: string;
  author: string;
  image: "products" | "warehouse" | "ship";
  intro: string;
  body: string;
};

export const blogs: BlogPost[] = [
  {
    "id": "export-guide",
    "title": "A buyer\u2019s guide to dry-fruit sourcing",
    "category": "Export Guide",
    "date": "2026",
    "readTime": "3 min read",
    "author": "Akvera Universal",
    "image": "ship",
    "intro": "A considered order begins with a clear specification.",
    "body": "Agree the dry-fruit variety, grade, size, quantity and destination before comparing quotations. A sample can help confirm appearance and texture.\n\nReview the pack material, labelling and storage needs. Confirm documentation and any laboratory tests required by the importing country.\n\nThe final commercial agreement should set out price, payment terms, Incoterms and shipment expectations."
  },
  {
    "id": "packaging-tips",
    "title": "Protecting freshness throughout the journey",
    "category": "Packaging Tips",
    "date": "2026",
    "readTime": "3 min read",
    "author": "Akvera Universal",
    "image": "warehouse",
    "intro": "The right pack protects more than appearance.",
    "body": "Dry fruits respond to temperature, humidity and handling. Choose food-grade packing appropriate to the product and planned journey.\n\nDiscuss sealed liners, carton strength, pack size and label information. Storage guidance and shelf life should be confirmed for the specific product.\n\nCareful palletisation and a suitable container can reduce handling damage and support a consistent arrival condition."
  },
  {
    "id": "global-trade",
    "title": "Building a dependable dry-fruit partnership",
    "category": "Global Trade",
    "date": "2026",
    "readTime": "3 min read",
    "author": "Akvera Universal",
    "image": "products",
    "intro": "Clear communication matters at every border.",
    "body": "For importers, a focused supply partner helps turn requirements into an agreed product specification. Discuss market needs early, including packaging and documentation.\n\nFreight timings depend on route, carrier and port conditions. Review current schedules rather than relying on general transit estimates.\n\nA lasting relationship is built on realistic commitments, practical updates and a shared understanding of quality."
  },
  {
    "id": "agro-market",
    "title": "Understanding seasonal dry-fruit availability",
    "category": "Dry Fruits Market",
    "date": "2026",
    "readTime": "3 min read",
    "author": "Akvera Universal",
    "image": "products",
    "intro": "Plan around varieties, harvests and demand.",
    "body": "Almonds, walnuts, pistachios and dried fruits have distinct growing regions and seasonal patterns. Availability and pricing vary by grade and origin.\n\nAsk for a current quotation and confirm the sample, crop information and storage history when relevant.\n\nFor repeat orders, discuss volume forecasts and acceptable grade alternatives before agreeing a supply plan."
  },
  {
    "id": "business-news",
    "title": "A focused collection for quality-conscious buyers",
    "category": "Business News",
    "date": "2026",
    "readTime": "3 min read",
    "author": "Akvera Universal",
    "image": "warehouse",
    "intro": "Ten varieties, one consistent approach.",
    "body": "The Akvera Universal catalogue focuses on ten dry-fruit varieties, from almonds and cashews to prunes and hazelnuts.\n\nOur export desk works with buyers to understand grade, pack size, destination and intended use. Retail, gifting and ingredient applications each require a different selection.\n\nExplore the collection and contact us to discuss your next requirement."
  }
];
