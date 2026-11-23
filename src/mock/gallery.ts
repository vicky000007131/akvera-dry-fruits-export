export type GalleryItem = {
  id: string;
  title: string;
  category: "Warehouse" | "Packaging" | "Exports" | "Products" | "Containers" | "Quality Inspection" | "Office";
  description: string;
  imageKey: "warehouse" | "hero" | "collection";
  imageUrl: string;
};

export const galleryItems: GalleryItem[] = [
  {
    "id": "gal-1",
    "title": "A naturally exceptional selection",
    "category": "Products",
    "description": "A curated collection of tree nuts and dried fruits.",
    "imageKey": "collection",
    "imageUrl": "/images/gallery-premium-collection.webp"
  },
  {
    "id": "gal-2",
    "title": "Care in every selection",
    "category": "Quality Inspection",
    "description": "Dry fruits inspected and sorted for consistent quality.",
    "imageKey": "warehouse",
    "imageUrl": "/images/gallery-sorting-grading.webp"
  },
  {
    "id": "gal-3",
    "title": "Packed to preserve freshness",
    "category": "Packaging",
    "description": "Food-grade packaging for dry-fruit consignments.",
    "imageKey": "collection",
    "imageUrl": "/images/gallery-packaging.webp"
  },
  {
    "id": "gal-4",
    "title": "Stored with care",
    "category": "Warehouse",
    "description": "Organised dry-fruit storage and handling.",
    "imageKey": "warehouse",
    "imageUrl": "/images/gallery-warehouse-storage.webp"
  },
  {
    "id": "gal-5",
    "title": "Ready for the journey",
    "category": "Exports",
    "description": "Palletised dry-fruit cartons prepared for dispatch.",
    "imageKey": "warehouse",
    "imageUrl": "/images/gallery-export-ready.webp"
  },
  {
    "id": "gal-6",
    "title": "Trade without borders",
    "category": "Exports",
    "description": "International dry-fruit shipment coordination.",
    "imageKey": "hero",
    "imageUrl": "/images/gallery-international-trading.webp"
  },
  {
    "id": "gal-7",
    "title": "Connected to global markets",
    "category": "Containers",
    "description": "Container logistics for international supply.",
    "imageKey": "hero",
    "imageUrl": "/images/gallery-container-logistics.webp"
  },
  {
    "id": "gal-8",
    "title": "Variety at scale",
    "category": "Products",
    "description": "Distinct dry-fruit varieties for wholesale supply.",
    "imageKey": "collection",
    "imageUrl": "/images/gallery-bulk-varieties.webp"
  }
];
