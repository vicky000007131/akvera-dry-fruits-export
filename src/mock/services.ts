export type ServiceItem = {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  deliverables: string[];
};

export const serviceList: ServiceItem[] = [
  {
    "id": "farm-gate-sourcing",
    "title": "Dry-Fruit Sourcing",
    "iconName": "Sprout",
    "tagline": "The right variety for your market",
    "description": "We discuss varieties, origins, grades and seasonal availability with your requirements in mind.",
    "deliverables": [
      "Variety selection",
      "Grade discussion",
      "Origin confirmation"
    ]
  },
  {
    "id": "quality-assurance",
    "title": "Grading & Inspection",
    "iconName": "ShieldCheck",
    "tagline": "Carefully considered quality",
    "description": "Inspection requirements are agreed for size, colour, texture, moisture and condition.",
    "deliverables": [
      "Sample review",
      "Condition checks",
      "Testing requirements"
    ]
  },
  {
    "id": "custom-packaging",
    "title": "Food-Grade Packaging",
    "iconName": "Package",
    "tagline": "Protected for the journey",
    "description": "Discuss bulk cartons, retail packs and private-label requirements for the selected dry fruit.",
    "deliverables": [
      "Bulk packs",
      "Retail options",
      "Label requirements"
    ]
  },
  {
    "id": "export-documentation",
    "title": "Export Documentation",
    "iconName": "FileText",
    "tagline": "Clarity across borders",
    "description": "Coordinate the documents applicable to the product, shipment and destination.",
    "deliverables": [
      "Commercial invoice",
      "Packing list",
      "Origin requirements"
    ]
  },
  {
    "id": "ocean-freight",
    "title": "Freight Coordination",
    "iconName": "Truck",
    "tagline": "A considered shipping plan",
    "description": "Discuss suitable freight options, booking schedules and shipment handling.",
    "deliverables": [
      "Freight options",
      "Container suitability",
      "Dispatch coordination"
    ]
  },
  {
    "id": "destination-delivery",
    "title": "Destination Support",
    "iconName": "Globe2",
    "tagline": "Communication beyond dispatch",
    "description": "Share shipment milestones and coordinate destination requirements under the agreed Incoterms.",
    "deliverables": [
      "Tracking information",
      "Arrival coordination",
      "Order follow-up"
    ]
  }
];
